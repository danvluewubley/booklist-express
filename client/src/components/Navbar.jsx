import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return (
    <div className="w-screen flex justify-center items-center h-16">
      <ul className="flex list-none p-0 m-0 space-x-8">
        <li>
          <Link
            to="/"
            className={`relative font-custom text-2xl transition-all duration-300`}
          >
            Home
            <span
              className={`absolute left-0 right-0 bottom-0 h-0.5 bg-black transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                location.pathname === "/" ? "scale-x-100" : ""
              }`}
            />
          </Link>
        </li>
        <li>
          <Link
            to="/booklist"
            className={`relative font-custom text-2xl transition-all duration-300`}
          >
            Booklist
            <span
              className={`absolute left-0 right-0 bottom-0 h-0.5 bg-black transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                location.pathname === "/booklist" ? "scale-x-100" : ""
              }`}
            />
          </Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link
              to="/booklist/personal"
              className={`relative font-custom text-2xl transition-all duration-300`}
            >
              Personal Booklist
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 bg-black transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                  location.pathname === "/booklist/personal"
                    ? "scale-x-100"
                    : ""
                }`}
              />
            </Link>
          </li>
        )}
        <li>
          <Link
            to={isLoggedIn ? "/book" : "/registration"}
            className={`relative font-custom text-2xl transition-all duration-300`}
          >
            {isLoggedIn ? "Book" : "Registration"}
            <span
              className={`absolute left-0 right-0 bottom-0 h-0.5 bg-black transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                location.pathname === (isLoggedIn ? "/book" : "/registration")
                  ? "scale-x-100"
                  : ""
              }`}
            />
          </Link>
        </li>
        <li>
          <Link
            to={isLoggedIn ? "/logout" : "/login"}
            className={`relative font-custom text-2xl transition-all duration-300`}
          >
            {isLoggedIn ? "Logout" : "Login"}
            <span
              className={`absolute left-0 right-0 bottom-0 h-0.5 bg-black transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                location.pathname === (isLoggedIn ? "/logout" : "/login")
                  ? "scale-x-100"
                  : ""
              }`}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;