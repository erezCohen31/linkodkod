import { useState } from "react";
import type PostProps from "../../interface/PostProps.ts";
import "../../style/Post.css";
import { useNavigate } from "react-router";
import "../../style/PostPage.css";

export default function Post({ post }: PostProps) {
  const [likeState, useLikeState] = useState("like");
  const navigate = useNavigate();
  const clickLike = (event: any) => {
    event.stopPropagation();
    useLikeState(likeState === "like-clicked" ? "like" : "like-clicked");
  };
  {
    /*create post with the props*/
  }
  return (
    <div className="container-postpage">
      <div
        className="post-page"
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="post-image" src={post.url} alt={post.alt} />
        <p>Description:{post.description}</p>
        <div className="post-information">
          <div className="container-like">
            <div className={likeState} onClick={clickLike}></div>
            <p>{post.numOfLike}</p>
          </div>
          <p>{post.username}</p>
          <time dateTime="20:00">{post.time}</time>
        </div>
      </div>
    </div>
  );
}
