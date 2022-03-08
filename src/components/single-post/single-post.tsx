import React from "react";

type IProps = {
  post: {
    image: string;
    title: string;
  };
};

const SinglePost: React.FC<IProps> = ({ post }): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <img src={post?.image} alt="" />
        <small className="text-center">
          <p>{post?.title}</p>
        </small>
      </div>
    </React.Fragment>
  );
};

export default SinglePost;
