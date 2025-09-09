import Post from "./Post.tsx";
import "../../style/ContainerPosts.css";
import { useContext, useEffect, useState } from "react";
import type PostType from "../../interface/Post.ts";
import { UserContext } from "../../context/User.context.tsx";
import { getAllPosts } from "../../controller/PostController.ts";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>();
  const [error, setError] = useState<any>();
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");

  {
    /* fetch once to recover the posts */
  }
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getAllPosts(token || "");
      if (posts) {
        setPosts(posts);
      } else {
        setError(posts);
      }
    };
    fetchData();
  }, []);

  if (!posts) {
    return <div>{"loading"}</div>;
  }
  if (error) {
    return <div>{"error: " + error}</div>;
  }

  return (
    posts && (
      <div className="home">
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
