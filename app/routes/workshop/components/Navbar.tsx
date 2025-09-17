import { Link } from "react-router";

export default function Navbar() {
  return (
    <div
      className="
        flex justify-between items-center p-4 
        bg-gradient-to-r from-blue-500 to-purple-500 text-white
      "
    >
      <h1 className="text-2xl font-bold">My Company</h1>
      <div className="flex gap-4">
        <Link to="/workshop/page/home" className="flex items-center gap-2">
          <i className="fa-solid fa-house"></i>
          Home
        </Link>

        <Link to="/workshop/page/about" className="flex items-center gap-2">
          <i className="fa-solid fa-user"></i>
          About
        </Link>

        <Link to="/workshop/page/contact" className="flex items-center gap-2">
          <i className="fa-solid fa-phone"></i>
          Contact
        </Link>
      </div>
    </div>
  );
}
