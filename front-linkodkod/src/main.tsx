import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PostProvider from "./context/PostProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <PostProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </PostProvider>
);
