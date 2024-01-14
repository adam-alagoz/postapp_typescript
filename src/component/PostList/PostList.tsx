import React from "react";
import PostCard from "../postCard/PostCard";
import { PostProps } from "@/types/types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log("res", res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // let data1 = res.json();
  // console.log(data1);

  return res.json();
}
console.log("data");
const PostList = async () => {
  const data = await getData();
  //OR
  // const data: PostProps[] = await getData();

  return (
    <div className="postList">
      {data.map((post: PostProps) => (
        //  OR
        // {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
