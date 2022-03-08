import React from "react";

const Footer: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="py-4">
        <div className="w-11/12 md:w-9/12 my-0 mx-auto">
          <div>
            <h3 className="md:text-center text-lg md:text-2xl text-gray-800">
              Get In Touch
            </h3>
            <div className="flex justify-center gap-x-2 items-center py-2 border-b-2 border-gray-300">
              <span>
                <img
                  src="/assets/github.png"
                  alt=""
                  width="30"
                  className="cursor-pointer"
                />
              </span>
              <span>
                <img
                  src="/assets/email.png"
                  alt=""
                  width="30"
                  className="cursor-pointer"
                />
              </span>
              <span>
                <img
                  src="/assets/twitter.png"
                  alt=""
                  width="30"
                  className="cursor-pointer"
                />
              </span>
            </div>
            <p className="pt-4 text-center">
              © {new Date().getFullYear()} Benson Yeboah. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
