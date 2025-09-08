import "./App.css";
import PostPage from "./components/application_layout/PostPage.tsx";
import PostsPage from "./components/application_layout/ContainerPosts.tsx";
import Layout from "./components/Layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { PostContext } from "./context/PostProvider.tsx";
import { useContext } from "react";
import AddPost from "./components/application_layout/AddPost.tsx";

function App() {
  const { postContext } = useContext(PostContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*layout with the header and change the content */}
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<PostsPage />} />
            {postContext && (
              <Route
                path={`/home/post:${postContext.id}`}
                element={<PostPage id={postContext.id} />}
              />
            )}
            <Route path="/add-post" element={<AddPost />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
