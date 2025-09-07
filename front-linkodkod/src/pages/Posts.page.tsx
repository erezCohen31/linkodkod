import type PostsPagesProps from "../interface/PostsPageProps.ts";
import Post from "../components/Post.tsx";
import "../style/PostsPage.css";

export default function PostsPage({ posts }: PostsPagesProps) {
  return (
    <div className="container-posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
