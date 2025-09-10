import { NavLink } from "react-router-dom";
import "../../style/Navbar.css";
import { useContext } from "react";
import { UserContext } from "../../context/User.context";

export default function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user && (
        <div className="navbar">
          <NavLink className={"navlink"} to="/posts">
            Home
          </NavLink>
          <NavLink className={"navlink"} to="/add-post">
            Add Post
          </NavLink>
          <NavLink className={"navlink"} to="/my-Post">
            My Posts
          </NavLink>
        </div>
      )}
    </>
  );
}
