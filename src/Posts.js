import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/postsfewfefew")
      .then((json) => setPosts(json.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>id : {post.id}</li>
          <li>Title: {post.title}</li>
        </ul>
      ))}
    </div>
  );
}
