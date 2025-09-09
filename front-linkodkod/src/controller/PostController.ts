import type PostType from "../interface/Post.ts";

const API_URL = "http://localhost:3000/api/post";

async function handleResponse<T>(response: Response): Promise<T | null> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      (error as any).message || `HTTP error! status: ${response.status}`
    );
  }

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

export async function getAllPosts(token: string): Promise<PostType[] | null> {
  const response = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await handleResponse(response);
}

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
