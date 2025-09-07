import Header from "./application_layout/Header.tsx";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
