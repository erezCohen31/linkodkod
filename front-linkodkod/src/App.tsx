import "./App.css";
import PostsPage from "./pages/Posts.page.tsx";
const posts = [
  {
    url: "../src/assets/imagePost/men.jpg",
    alt: "image of men",
    description:
      "this is a description <eqgwdrghdwrth es<gdhdrh egs<eg QSFQSF Q fQF ",
    numOfLike: 25,
    username: "erez",
    time: "20:00",
  },
  {
    url: "../src/assets/imagePost/men.jpg",
    alt: "image of men",
    description:
      "this is a description <eqgwdrghdwrth es<gdhdrh egs<eg QSFQSF Q fQF ",
    numOfLike: 25,
    username: "erez",
    time: "20:00",
  },
  {
    url: "../src/assets/imagePost/men.jpg",
    alt: "image of men",
    description:
      "this is a description <eqgwdrghdwrth es<gdhdrh egs<eg QSFQSF Q fQF ",
    numOfLike: 25,
    username: "erez",
    time: "20:00",
  },
  {
    url: "../src/assets/imagePost/men.jpg",
    alt: "image of men",
    description:
      "this is a description <eqgwdrghdwrth es<gdhdrh egs<eg QSFQSF Q fQF ",
    numOfLike: 25,
    username: "erez",
    time: "20:00",
  },
  {
    url: "../src/assets/imagePost/men.jpg",
    alt: "image of men",
    description:
      "this is a description <eqgwdrghdwrth es<gdhdrh egs<eg QSFQSF Q fQF ",
    numOfLike: 25,
    username: "erez",
    time: "20:00",
  },
  {
    url: "../src/assets/imagePost/men.jpg",
    alt: "image of men",
    description:
      "this is a description <eqgwdrghdwrth es<gdhdrh egs<eg QSFQSF Q fQF ",
    numOfLike: 25,
    username: "erez",
    time: "20:00",
  },
];

function App() {
  return (
    <>
      <PostsPage posts={posts} />
    </>
  );
}

export default App;
