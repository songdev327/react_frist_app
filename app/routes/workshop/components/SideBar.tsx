import { Link } from "react-router";

export default function Sidebar() {
  return (
    <div
      className="
        bg-gradient-to-tr from-blue-500 to-purple-500 
        text-white w-64 p-5 h-screen rounded-lg
      "
    >
      <h1 className="text-2xl font-bold mb-3">Sidebar Menu</h1>
      <ul className="flex flex-col gap-2">
        <li>
          <Link to="/workshop/page/home" className="flex items-center gap-2">
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/workshop/page/about" className="flex items-center gap-2">
            <i className="fa-solid fa-user"></i>
            About
          </Link>
        </li>
        <li>
          <Link to="/workshop/page/contact" className="flex items-center gap-2">
            <i className="fa-solid fa-phone"></i>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
