import Post from "./Post.tsx";
import "../../style/ContainerPosts.css";
import { useEffect, useState } from "react";
import type PostType from "../../interface/Post.ts";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>();

  useEffect(() => {
    fetch("http://localhost:3000/api/post")
      .then((response) => response.json())
      .then((fetchedData) => setPosts(JSON.parse(fetchedData)));
  }, []);
  {
    console.log(posts);
  }

  {
    /*map of the posts to create post */
  }
  return (
    <div className="container-posts">
      {posts?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}
