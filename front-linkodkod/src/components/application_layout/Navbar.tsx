import { NavLink } from "react-router-dom";
import "../../style/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink className={"navlink"} to="/home">
        Home
      </NavLink>
      <NavLink className={"navlink"} to="/add">
        Add Post
      </NavLink>
      <NavLink className={"navlink"} to="/My Post">
        My Posts
      </NavLink>
    </div>
  );
}
