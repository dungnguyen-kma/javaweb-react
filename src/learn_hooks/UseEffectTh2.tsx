import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

interface Posts{
  userId:number,
  id:number,
  title:string,
  body:string
}

function UseEffectTh2() {
  const [posts, setPosts] = useState<Posts[]>();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response?.data;
      })
      .then((posts:Posts[]) => {
        setPosts(posts);
      });
      console.log("calling api....")
  }, []);

  return (
    <div className="App">
      {posts?.map((post: Posts): any => {
        return (
          <li key={post?.id} className="flex">
            <div className="pr-8">id:{post?.id}</div>
            <div>title: {post?.title}</div>
          </li>
        );
      })}
    </div>
  );
}

export default UseEffectTh2;
