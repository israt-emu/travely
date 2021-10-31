import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logOut } = useAuth();
  return (
    <div className="shadow-lg">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/home" className="inline-flex items-center">
            <img src={logo} alt="" className="w-1/6" />
            <span className="font-bold text-xl tracking-tight">Travely.</span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/home"
                className="font-semibold tracking-wide text-black-700 transition-colors duration-200"
              >
                Home
              </NavLink>
            </li>
            {user.email && (
              <li>
                <NavLink
                  to="/mytourplans"
                  className="font-semibold tracking-wide text-black-700 transition-colors duration-200"
                >
                  My Tour Plans
                </NavLink>
              </li>
            )}
            {user.email && (
              <li>
                <NavLink
                  to="/dashboard"
                  className="font-semibold tracking-wide text-black-700 transition-colors duration-200"
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            <li>
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
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className={`p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline text-blue-900 border-2 border-blue-900 ${
                isMenuOpen ? "hidden" : "block"
              }`}
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full ">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/home" className="inline-flex items-center">
                        <img src={logo} alt="" className="w-1/6" />
                        <span className="font-semibold text-xl tracking-tight">
                          Travely.
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded text-blue-900 border-2 border-blue-900 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-blue-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/home"
                          className="font-medium tracking-wide text-black-900 transition-colors duration-200 "
                        >
                          Home
                        </NavLink>
                      </li>
                      {user.email && (
                        <li>
                          <NavLink
                            to="/mytourplans"
                            className="font-medium tracking-wide text-black-900 transition-colors duration-200"
                          >
                            My Tour Plans
                          </NavLink>
                        </li>
                      )}
                      {user.email && (
                        <li>
                          <NavLink
                            to="/dashboard"
                            className="font-medium tracking-wide text-black-900 transition-colors duration-200"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                      )}

                      <li>
                        {user.email ? (
                          <div className="lg:flex items-center">
                            <h1 className="text-lg font-bold">
                              {user.displayName}
                            </h1>
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
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
