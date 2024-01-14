import { PostProps } from "@/types/types";
import React from "react";

const PostCard = (props: PostProps) => {
  return (
    <div className="PostCard">
      <h1>{props.id}</h1>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
};

export default PostCard;
