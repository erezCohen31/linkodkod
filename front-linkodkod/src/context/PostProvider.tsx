import { createContext, useState, type ReactNode } from "react";
import type Post from "../interface/Post";

export const PostContext = createContext<any>(null);

export default function PostProvider({ children }: { children: ReactNode }) {
  const [post, setPost] = useState<any>(null);

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
}
