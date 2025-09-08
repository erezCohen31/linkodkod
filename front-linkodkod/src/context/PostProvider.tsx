import { createContext, useState, type ReactNode } from "react";
import type Post from "../interface/Post";

export const PostContext = createContext<{
  postContext: Post | null;
  setPostContext: React.Dispatch<React.SetStateAction<Post | null>>;
}>({
  postContext: null,
  setPostContext: () => {},
});

export default function PostProvider({ children }: { children: ReactNode }) {
  const [postContext, setPostContext] = useState<Post | null>(null);

  return (
    <PostContext.Provider value={{ postContext, setPostContext }}>
      {children}
    </PostContext.Provider>
  );
}
