import type PostProps from "../interface/PostProps.ts";
import "../style/Post.css";

export default function Post({ props }: PostProps) {
  return (
    <div className="post">
      <img className="post-image" src={props.url} alt={props.alt} />
      <p>Description:{props.description}</p>
      <div className="post-information">
        <div className="container-like">
          <span className="material-symbols-outlined">favorite</span>
          <p>{props.numOfLike}</p>
        </div>
        <p>{props.username}</p>
        <time dateTime="20:00">{props.time}</time>
      </div>
    </div>
  );
}
