import Post from "./Post.tsx";
import "../../style/ContainerPosts.css";
import { useContext, useEffect, useState } from "react";
import type PostType from "../../interface/Post.ts";
import { UserContext } from "../../context/User.context.tsx";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>();
  const [error, setError] = useState<any>();
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:3000/api/post")
      .then((response) => response.json())
      .then((fetchedData) => setPosts(fetchedData))
      .catch((error) => setError(JSON.parse(error)));
  }, []);

  {
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
      <div>
        <h1>Welcome {user?.name}</h1>
        <div className="container-posts">
          {posts?.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    )
  );
}
