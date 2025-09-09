const API_URL = "http://localhost:3000/api/auth";

//fetch for login
export async function login(mail: string, password: string) {
  try {
    const url = `${API_URL}/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail: mail.trim(), password: password.trim() }),
    });
    const text = await response.text();
    return text ? JSON.parse(text) : null;
  } catch (error: any) {
    return error;
  }
}

//fetch for signup
export async function signup(name: string, mail: string, password: string) {
  try {
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

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    return data;
  } catch (error: any) {
    return { error, user: null, token: null };
  }
}
