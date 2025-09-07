import Post from "../components/Post.tsx";
import "../style/PostsPage.css";
import posts from "../assets/data/my-posts.ts";

export default function PostsPage() {
  return (
    <div className="container-posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
