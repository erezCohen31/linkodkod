import { useNavigate } from "react-router";

export default function Connect() {
  const navigate = useNavigate();
  return (
    <div className="connect-choice">
      <button onClick={() => navigate("login")}>Login</button>
      <button onClick={() => navigate("signup")}>Signup</button>
    </div>
  );
}
