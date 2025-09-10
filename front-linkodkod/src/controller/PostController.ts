import type PostType from "../interface/Post";

const API_URL = "http://localhost:3000/api/post";

//fetch for to recover all post
export async function getAllPosts(token: string) {
  try {
    const response = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const post = await response.json();
    return post;
  } catch (error: any) {
    return error;
  }
}

//fetch for recover post by id
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

//fetch for update like count
export async function updateLike(
  token: string,
  id: number,
  numOfLike: number
): Promise<number> {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ numOfLike }),
    });

    const newLikeCount: string = await response.text();
    return Number(newLikeCount);
  } catch (error: any) {
    return error;
  }
}

//fetch for delete post by id
export async function deleteMyPost(
  token: string,
  postId: number
): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/delete/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);

    const isDeletedStr: string = await response.text();
    return Boolean(isDeletedStr);
  } catch (error: any) {
    return error;
  }
}

//fetch for recover post by user
export async function getMyPost(token: string, userId: number) {
  try {
    const response = await fetch(`${API_URL}/mypost/${userId}`, {
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
