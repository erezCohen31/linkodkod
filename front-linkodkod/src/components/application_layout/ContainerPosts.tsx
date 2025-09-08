import Post from "./Post.tsx";
import "../../style/ContainerPosts.css";
import { useEffect, useState } from "react";
import type PostType from "../../interface/Post.ts";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    fetch("http://localhost:3000/api/post")
      .then((response) => response.json())
      .then((fetchedData) => setPosts(fetchedData))
      .catch((error) => setError(JSON.parse(error)));
  }, []);

  {
    console.log(posts);

    /*map of the posts to create post */
  }

  if (!posts) {
    return <div>{"loading"}</div>;
  }
  if (error) {
    return <div>{"error: " + error}</div>;
  }

  return (
    posts && (
      <div className="container-posts">
        {posts?.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    )
  );
}
