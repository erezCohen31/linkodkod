import { useContext, useEffect, useState } from "react";
import "../../style/Post.css";
import { useNavigate } from "react-router";
import "../../style/PostPage.css";
import type PostType from "../../interface/Post.ts";
import type PostPageProps from "../../interface/PostPageProps.ts";
import { PostContext } from "../../context/PostProvider.tsx";

export default function PostPage(id: PostPageProps) {
  const [likeState, useLikeState] = useState("like");
  const [post, setPost] = useState<PostType>();
  const [error, setError] = useState<any>();
  const { postContext } = useContext(PostContext);

  useEffect(() => {
    fetch(`http://localhost:3000/api/post/${postContext?.id}`)
      .then((response) => response.json())
      .then((fetchedData) => setPost(fetchedData))
      .catch((error) => setError(JSON.parse(error)));
  }, []);

  const navigate = useNavigate();

  const clickLike = (event: any) => {
    event.stopPropagation();
    useLikeState(likeState === "like-clicked" ? "like" : "like-clicked");
  };
  {
    /*create post with the props*/
  }
  if (error) {
    return <p>{error};</p>;
  }
  return (
    <div
      onClick={() => {
        navigate("/home");
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
            <p>{post?.numOfLike}</p>
          </div>
          <p>{post?.username}</p>
          <time dateTime={post?.time}>{post?.time}</time>
        </div>
      </div>
    </div>
  );
}
