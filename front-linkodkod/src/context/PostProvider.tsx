import { createContext, useState, type ReactNode } from "react";
import type Post from "../interface/Post";

export const PostContext = createContext<{
  post: Post | null;
  setPost: React.Dispatch<React.SetStateAction<Post | null>>;
}>({
  post: null,
  setPost: () => {},
});

export default function PostProvider({ children }: { children: ReactNode }) {
  const [post, setPost] = useState<Post | null>(null);

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
}
