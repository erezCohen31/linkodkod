import type PostProps from "../interface/PostProps.ts";
import "../style/Post.css";

export default function Post({ post }: PostProps) {
  return (
    <div className="post">
      <img className="post-image" src={post.url} alt={post.alt} />
      <p>Description:{post.description}</p>
      <div className="post-information">
        <div className="container-like">
          <span className="material-symbols-outlined">favorite</span>
          <p>{post.numOfLike}</p>
        </div>
        <p>{post.username}</p>
        <time dateTime="20:00">{post.time}</time>
      </div>
    </div>
  );
}
