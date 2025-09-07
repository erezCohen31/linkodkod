import { useRef, useState } from "react";
import type PostProps from "../interface/PostProps.ts";
import "../style/Post.css";

export default function Post({ post }: PostProps) {
  const [likeState, useLikeState] = useState("like");
  return (
    <div className="post">
      <img className="post-image" src={post.url} alt={post.alt} />
      <p>Description:{post.description}</p>
      <div className="post-information">
        <div className="container-like">
          <div
            className={likeState}
            onClick={() =>
              useLikeState(
                likeState === "like-clicked" ? "like" : "like-clicked"
              )
            }
          ></div>
          <p>{post.numOfLike}</p>
        </div>
        <p>{post.username}</p>
        <time dateTime="20:00">{post.time}</time>
      </div>
    </div>
  );
}
