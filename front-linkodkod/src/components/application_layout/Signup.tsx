import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { signup } from "./controller/UserController.ts";
import { UserContext } from "../../context/User.context.tsx";
import type SignupForm from "../../interface/SignupForm.ts";

export default function Signup() {
  const [form, setForm] = useState<SignupForm>({
    name: "",
    mail: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const { user, token } = await signup(form.name, form.mail, form.password);
      localStorage.setItem("token", token);
      setUser(user);
      navigate("/posts");
      setError("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="container-login">
      <h1>Connect to the kodkod</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            placeholder="name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mail"></label>
          <input
            id="mail"
            name="mail"
            type="text"
            value={form.mail}
            placeholder="mail"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password"></label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            placeholder="password"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}
