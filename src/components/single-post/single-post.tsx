import React from "react";
import { NavLink } from "react-router-dom";

type IProps = {
  post: {
    title?: string | undefined;
    featuredImage?:
      | {
          url: string;
        }
      | undefined;
    sys?: {
      id: string;
    };
  };
};

const SinglePost: React.FC<IProps> = ({ post }): JSX.Element => {
  return (
    <React.Fragment>
      <NavLink to={`/post/${post?.sys?.id}`}>
        <div className="shadow-md p-4 cursor-pointer rounded-lg">
          <img src={post?.featuredImage?.url} alt="" />
          <small className="text-center hover:underline">
            <p>{post?.title}</p>
          </small>
        </div>
      </NavLink>
    </React.Fragment>
  );
};

export default SinglePost;
