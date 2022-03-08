import React from "react";

type IProps = {
  tag: {
    title: string;
  };
};

const Tag: React.FC<IProps> = ({ tag }): JSX.Element => {
  return (
    <React.Fragment>
      <span className="bg-gray-300 rounded-xl cursor-pointer hover:bg-gray-500 hover:text-white text-gray-600 px-3 py-2 pill">
        {tag?.title}
      </span>
    </React.Fragment>
  );
};

export default Tag;
