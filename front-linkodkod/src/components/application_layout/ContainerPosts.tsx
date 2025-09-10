import Post from "./Post.tsx";
import "../../style/ContainerPosts.css";
import { useContext, useEffect, useState } from "react";
import type PostType from "../../interface/Post.ts";
import { UserContext } from "../../context/User.context.tsx";
import { getAllPosts } from "../../controller/PostController.ts";
import { useNavigate } from "react-router";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>();
  const [error, setError] = useState<any>();
  const { user } = useContext(UserContext);
  const [postId, setPostId] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  {
    /* fetch once to recover the posts */
  }
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getAllPosts(token || "");

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
        <form className="input-search-post">
          <input
            id="text"
            name="text"
            type="text"
            value={postId}
            onChange={(e: any) => setPostId(e.target.value)}
            placeholder="enter your post id"
            required
          />
          <button
            onClick={() => {
              navigate(`../post/${postId}`);
            }}
          >
            search
          </button>
        </form>

        <div className="container-posts">
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    )
  );
}
