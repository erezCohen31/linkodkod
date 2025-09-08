import "./App.css";
import PostPage from "./components/application_layout/PostPage.tsx";
import PostsPage from "./components/application_layout/ContainerPosts.tsx";
import Layout from "./components/Layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { PostContext } from "./context/PostProvider.tsx";
import { useContext } from "react";

function App() {
  const { post } = useContext(PostContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*layout with the header and change the content */}
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<PostsPage />} />
            {post && <Route path="/post" element={<PostPage post={post} />} />}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
