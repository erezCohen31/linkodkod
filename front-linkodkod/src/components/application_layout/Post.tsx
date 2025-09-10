import { useState } from "react";
import type PostProps from "../../interface/PostProps.ts";
import "../../style/Post.css";
import { useNavigate } from "react-router";
import { updateLike } from "../../controller/PostController.ts";

export default function Post({ post }: PostProps) {
  const [likeState, useLikeState] = useState("like");
  const [currentLike, setCurrentLike] = useState(post.numOfLike);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const clickLike = async (event: any) => {
    event.stopPropagation();
    useLikeState(likeState === "like-clicked" ? "like" : "like-clicked");
    let updatedLike;

    if (likeState === "like") {
      updatedLike = await updateLike(token || "", post.id, currentLike + 1);
    } else {
      updatedLike = await updateLike(token || "", post.id, currentLike - 1);
    }
    setCurrentLike(updatedLike);
  };

  {
    /*create post with the props*/
  }
  return (
    <div
      className="post"
      onClick={() => {
        navigate(`../post/${post.id}`);
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
          <p>{currentLike}</p>
        </div>
        <p>{post.username}</p>
        <time dateTime={post.time}>{post.time}</time>
      </div>
    </div>
  );
}
