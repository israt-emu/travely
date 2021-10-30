import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.jpg";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const handleCollapse = () => setExpanded(!expanded);
  const { user, logOut } = useAuth();
  return (
    <div>
      <div className="shadow w-full">
        <nav className="flex items-center justify-between p-3 max-w-7xl mx-auto">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-1/6" />
            <span className="font-semibold text-xl tracking-tight">
              Travely
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border-2 rounded text-blue-900 border-blue-900"
              onClick={handleCollapse}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full lg:block ${
              expanded ? "block" : "hidden"
            }  flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow">
              <NavLink
                to="/home"
                className="block mt-4 lg:inline-block lg:mt-0 mr-6"
              >
                Home
              </NavLink>
              <NavLink
                to="/mytourplans"
                className="block mt-4 lg:inline-block lg:mt-0 mr-6"
              >
                My Tour Plans
              </NavLink>

              <NavLink
                to="/managetours"
                className="block mt-4 lg:inline-block lg:mt-0 text-black mr-6"
              >
                Manage Tours
              </NavLink>
              <NavLink
                to="/addoffer"
                className="block mt-4 lg:inline-block lg:mt-0 text-black"
              >
                Add New Offer
              </NavLink>
            </div>
            <div>
              {user.email ? (
                <div className="lg:flex items-center">
                  <h1 className="text-lg font-bold">{user.displayName}</h1>
                  <button
                    className="rounded px-3 py-2 bg-blue-900 text-white mt-3 lg:mt-0 lg:ml-2 "
                    onClick={logOut}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="rounded px-3 py-2 bg-blue-900 text-white mt-3 lg:mt-0">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
