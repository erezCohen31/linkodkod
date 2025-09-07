import "./App.css";
import PostsPage from "./components/application_layout/PostsPage.tsx";
import Layout from "./components/Layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*layout with the header and change the content */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<PostsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
