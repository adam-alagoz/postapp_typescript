import React from "react";
import PostCard from "../postCard/PostCard";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  let data1 = res.json();
  console.log(data1);

  //   return res.json();
}

const PostList = async () => {
  const data = await getData();
  console.log("data", data);

  return (
    <div className="postList">
      <PostCard title="post title" body="post desc" />
    </div>
  );
};

export default PostList;
