import type PostType from "../interface/Post";

const API_URL = "http://localhost:3000/api/post";

//fetch for to recover all post
export async function getAllPosts(token: string): Promise<PostType[]> {
  try {
    const response = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const post: PostType[] = await response.json();
    return post;
  } catch (error: any) {
    return error;
  }
}

//fetch for add post
export async function getPostByid(
  token: string,
  id: string
): Promise<PostType> {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const post: PostType = await response.json();
    return post;
  } catch (error: any) {
    return error;
  }
}
