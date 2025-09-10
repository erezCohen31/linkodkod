import { useContext, useEffect, useState } from "react";
import "../../style/Post.css";
import { useNavigate, useParams } from "react-router";
import "../../style/PostPage.css";
import type PostType from "../../interface/Post.ts";
import {
  deleteMyPost,
  getPostByid,
  updateLike,
} from "../../controller/PostController.ts";
import { UserContext } from "../../context/User.context.tsx";

export default function PostPage() {
  const [likeState, useLikeState] = useState("like");
  const [post, setPost] = useState<PostType>();
  const [error, setError] = useState<any>();
  const [currentLike, setCurrentLike] = useState(post?.numOfLike);
  const token = localStorage.getItem("token");
  const { user } = useContext(UserContext);
  const my = post?.userId == user?.id;
  const { id } = useParams();
  const [deleted, setDeleted] = useState(false);

  {
    /*almost everything is repeated with post but I did not manage to make one */
  }
  {
    /*update like count */
  }
  const clickLike = async (event: any) => {
    event.stopPropagation();
    useLikeState(likeState === "like-clicked" ? "like" : "like-clicked");
    let updatedLike;

    if (post) {
      if (likeState === "like") {
        updatedLike = await updateLike(
          token || "",
          post.id,
          post.numOfLike + 1
        );
      } else {
        updatedLike = await updateLike(token || "", post.id, post.numOfLike);
      }
      setCurrentLike(updatedLike);
    }
  };
  const deletePost = async (event: any) => {
    event.stopPropagation();
    let isDeleted;
    if (post) {
      isDeleted = await deleteMyPost(token || "", post.id);
    }
    if (isDeleted) {
      setDeleted(isDeleted);
      navigate("/posts");
    }
  };
  {
    /* fetch once to recover the post with recover thr id from the url */
  }
  useEffect(() => {
    const fetchData = async () => {
      const post = await getPostByid(token || "", id || "");
      if (post) {
        setPost(post);
      } else {
        setError(post);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  if (error) {
    return <p>{error};</p>;
  }
  if (deleted) {
    return <></>;
  }
  return (
    <div
      onClick={() => {
        navigate("/posts");
      }}
      className="container-postpage"
    >
      <div className="post-page">
        <img
          className="post-image"
          src={"http://localhost:3000/" + post?.url}
          alt={post?.alt}
        />
        <p>Description:{post?.description}</p>
        <div className="post-information">
          <div className="container-like">
            <div className={likeState} onClick={clickLike}></div>
            <p>{currentLike || post?.numOfLike}</p>
          </div>
          <p>{post?.username}</p>
          <time dateTime={post?.time}>{post?.time}</time>
          {my && (
            <span onClick={deletePost} className="material-symbols-outlined">
              delete
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
