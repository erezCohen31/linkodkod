import Header from "./application_layout/Header.tsx";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      {/*header and change the outlet in function of the route */}
      <Header />
      <Outlet />
    </div>
  );
}
