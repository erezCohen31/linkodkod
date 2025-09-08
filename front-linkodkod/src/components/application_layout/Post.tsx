import { useState } from "react";
import type PostProps from "../../interface/PostProps.ts";
import "../../style/Post.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { PostContext } from "../../context/PostProvider.tsx";

export default function Post({ post }: PostProps) {
  const [likeState, useLikeState] = useState("like");
  const navigate = useNavigate();
  const { setPostContext } = useContext(PostContext);
  const clickLike = (event: any) => {
    event.stopPropagation();
    useLikeState(likeState === "like-clicked" ? "like" : "like-clicked");
  };

  {
    /*create post with the props*/
  }
  return (
    <div
      className="post"
      onClick={() => {
        setPostContext(post);
        navigate(`post:${post.id}`);
      }}
    >
      <img
        className="post-image"
        src={"http://localhost:3000/" + post.url}
        alt={post.alt}
      />
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
  );
}
