import Post from "./Post.tsx";
import "../../style/ContainerPosts.css";
import posts from "../../assets/data/my-posts.ts";

export default function PostsPage() {
  {
    /*map of the posts to create post */
  }
  return (
    <div className="container-posts">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}
