import "./App.css";
import PostPage from "./components/application_layout/PostPage.tsx";
import PostsPage from "./components/application_layout/ContainerPosts.tsx";
import Layout from "./components/Layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AddPost from "./components/application_layout/AddPost.tsx";
import Connect from "./components/application_layout/Connect.tsx";
import Signup from "./components/application_layout/Signup.tsx";
import Login from "./components/application_layout/Login.tsx";
import { UserProvider } from "./context/User.context.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            {/*layout with the header and change the content */}
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Connect />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/add-post" element={<AddPost />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
