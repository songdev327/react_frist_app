import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";

export default function Layout() {
  return (
    <>
      <Navbar />

      <div className="p-4 flex h-full">
        <Sidebar />
        <div className="ps-3 flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}
