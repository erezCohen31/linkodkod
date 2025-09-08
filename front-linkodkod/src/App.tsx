import "./App.css";
import PostPage from "./components/application_layout/PostPage.tsx";
import PostsPage from "./components/application_layout/ContainerPosts.tsx";
import Layout from "./components/Layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AddPost from "./components/application_layout/AddPost.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*layout with the header and change the content */}
          <Route path="/" element={<Layout />}>
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/add-post" element={<AddPost />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
