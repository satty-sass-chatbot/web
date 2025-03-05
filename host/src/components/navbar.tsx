import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center space-x-4 font-thin">
        <li>
          <Link to="/" className="font-bold text-blue-500 hover:text-blue-700">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/auth"
            className="font-bold  text-blue-500 hover:text-blue-700"
          >
            Auth
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="font-bold  text-blue-500 hover:text-blue-700"
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};
