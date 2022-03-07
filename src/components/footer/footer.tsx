import React from "react";

const Footer: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <div>
          <div>
            <h3 className="text-center text-2xl text-gray-800">
              Benson Yeboah
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
