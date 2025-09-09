import type PostType from "../interface/Post.ts";

const API_URL = "http://localhost:3000/api/post";

//handle to manage the responses
async function handleResponse(response: Response) {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `message: ${response.statusText}`);
  }
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

//fetch for to recover all post
export async function getAllPosts(token: string): Promise<PostType[] | null> {
  const response = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await handleResponse(response);
}

//fetch for add post
export async function getPostByid(
  token: string,
  id: string
): Promise<PostType | null> {
  const response = await fetch(`${API_URL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await handleResponse(response);
}
