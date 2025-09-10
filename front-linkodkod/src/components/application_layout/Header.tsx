import { useContext } from "react";
import "../../style/Header.css";
import { UserContext } from "../../context/User.context";
import { useNavigate } from "react-router";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo"></div>
      <h1>you protect us we bind you</h1>
      {user && (
        <button
          className="exit-button"
          onClick={() => {
            setUser(null);
            localStorage.clear();
            navigate("../");
          }}
        >
          exit
        </button>
      )}
    </div>
  );
}
