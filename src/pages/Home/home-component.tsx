import React from "react";
import { SideBar } from "../../components/side-bar/index";
import { SinglePost } from "../../components/single-post/index";

type IProps = {
  loading: boolean;
  posts: [{}];
};

const HomeComponent: React.FC<IProps> = ({ loading, posts }): JSX.Element => {
  return (
    <React.Fragment>
      <section className="bg-blue-400 py-10">
        <section className="w-9/12 my-0 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl text-white py-2">
              Latest Blog Posts - JavaScript Programming
            </h1>
            <small className="text-white text-sm md:text-lg">
              Get Updated With Top Trending Technologies In The World Of
              Javascript && Typescript
            </small>
            <p>😈🔥🧑🏾‍💻</p>
          </div>
        </section>
      </section>

      <main className="bg-gray-50 py-10">
        <section className="w-11/12 md:w-9/12 my-0 mx-auto">
          <section className="grid grid-cols-1 md:grid-cols-5 gap-x-8">
            <div className="col-span-4">
              <div>
                <section className="grid grid-cols-1 sm:grid-cols-3  gap-4">
                  {loading ? (
                    <div className="flex justify-center">Loading...</div>
                  ) : null}

                  {posts?.map((post: object, index: number) => (
                    <SinglePost post={post} key={index} />
                  ))}
                </section>
              </div>
            </div>

            <div className="col-span-1">
              <SideBar />
            </div>
          </section>
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomeComponent;
