import React from "react";
import { SideBar } from "../../components/side-bar";

type IProps = {
  loading: boolean;
  data: any;
};

const SpecificPostComponent: React.FC<IProps> = ({
  data,
  loading,
}): JSX.Element => {
  return (
    <React.Fragment>
      <section className="mt-10">
        <section className="w-11/12 md:w-9/12 my-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8">
            <div className="col-span-4">
              <h1 className="text-center text-lg md:text-2xl font-mono font-semibold text-gray-500 py-4">
                {data?.blogPost.title}
              </h1>
              <div className="flex justify-center">
                <img src={data?.blogPost.featuredImage.url} alt="" />
              </div>

              <section>
                {data?.blogPost?.body?.json.content.map(
                  (content: any, index: number) => {
                    switch (content.nodeType) {
                      case "paragraph":
                        return (
                          <p
                            key={index}
                            className="py-4 text-md text-gray-600 text-justify"
                          >
                            {content.content[0].value}
                          </p>
                        );

                      default:
                        return null;
                    }
                  }
                )}
              </section>
            </div>
            <div>
              <SideBar />
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default SpecificPostComponent;
