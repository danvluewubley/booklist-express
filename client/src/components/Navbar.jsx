import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return (
    <div className="w-screen flex justify-center items-center h-16">
      <ul className="flex list-none p-0 m-0 space-x-8">
        {[
          "/",
          "/booklist",
          isLoggedIn ? "/book" : "/registration",
          isLoggedIn ? "/logout" : "/login",
        ].map((path, index) => (
          <li key={index}>
            <Link
              to={path}
              className={`relative font-custom text-2xl transition-all duration-300`}
            >
              {path === "/"
                ? "Home"
                : path.charAt(1).toUpperCase() + path.slice(2)}
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 bg-black transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                  location.pathname === path ? "scale-x-100" : ""
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
