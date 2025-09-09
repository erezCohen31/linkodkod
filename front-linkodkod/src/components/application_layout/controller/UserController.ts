const API_URL = "http://localhost:3000/api/auth";

async function handleResponse(response: Response) {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  if (response.status === 204) {
    return null;
  }
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

export async function login(mail: string, password: string) {
  const url = `${API_URL}/login`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mail: mail.trim(), password: password.trim() }),
  });

  return handleResponse(response);
}

export async function signup(name: string, mail: string, password: string) {
  const url = `${API_URL}/signup`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.trim(),
      mail: mail.trim(),
      password: password.trim(),
    }),
  });

  return handleResponse(response);
}
