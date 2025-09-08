import Footer from "./application_layout/Footer.tsx";
import Header from "./application_layout/Header.tsx";
import { Outlet } from "react-router";
import Navbar from "./application_layout/Navbar.tsx";

export default function Layout() {
  return (
    <div>
      {/*header and change the outlet in function of the route */}
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
