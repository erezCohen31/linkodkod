import Post from "./Post.tsx";
import "../../style/ContainerPosts.css";
import { useContext, useEffect, useState } from "react";
import type PostType from "../../interface/Post.ts";
import { UserContext } from "../../context/User.context.tsx";
import { getMyPost } from "../../controller/PostController.ts";

export default function MyPost() {
  const [posts, setPosts] = useState<PostType[]>();
  const [error, setError] = useState<any>();
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");

  {
    /* fetch once to recover the posts */
  }
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getMyPost(token || "", user?.id || 0);
      console.log(user);

      if (posts) {
        setPosts(posts);
      }
      if (posts.error) {
        setError(posts.error);
      }
    };
    fetchData();
  }, []);
  if (error) {
    return <div className="loading">{error}</div>;
  }
  if (!posts) {
    return <div className="loading">Loading...</div>;
  }

  return (
    posts && (
      <div className="home">
        <h1>Welcome {user?.name}</h1>
        <div className="container-posts">
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    )
  );
}
