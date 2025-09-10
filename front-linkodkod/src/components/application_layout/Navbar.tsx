import { NavLink } from "react-router-dom";
import "../../style/Navbar.css";

export default function Navbar() {
  return (
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
  );
}
