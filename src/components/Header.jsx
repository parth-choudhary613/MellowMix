import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="mellow-cream px-6 py-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide mellow-pink">
          MellowMix
        </Link>
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "mellow-pink font-semibold" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "mellow-pink font-semibold" : "text-white"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
