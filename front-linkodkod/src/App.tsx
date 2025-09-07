import "./App.css";
import Post from "./components/Post.tsx";
const post = {
  url: "../src/assets/imagePost/men.jpg",
  alt: "image of men",
  description:
    "this is a description <eqgwdrghdwrth es<gdhdrh egs<eg QSFQSF Q fQF ",
  numOfLike: 25,
  username: "erez",
  time: "20:00",
};

function App() {
  return (
    <>
      <Post props={post} />
    </>
  );
}

export default App;
