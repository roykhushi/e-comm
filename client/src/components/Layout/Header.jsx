import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    //removing the local storage and
    //changing state too
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successful!");
  };

  const handleToggle = () =>{
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('hidden');
  }

  console.log(auth?.user?.name);

  return (
    <>
      <nav className="bg-gray-800 w-full p-3 space-x-2">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="realative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center  sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <GiShoppingBag className="brand" />
                <NavLink
                  to="/"
                  className="rounded-md px-3 py-2 text-[15px] font-medium text-gray-300"
                >
                  UrbanCart
                </NavLink>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex ms-[600px] space-x-2">
                  <NavLink
                    to="/"
                    className="rounded-md px-3  py-2 text-[15px] font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/"
                    className="rounded-md px-3 py-2 text-[15px] font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Category
                  </NavLink>

                  {!auth?.user ? (
                    <>
                      <NavLink
                        to="/login"
                        className="rounded-md px-3 py-2 text-[15px] font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Login
                      </NavLink>

                      <NavLink
                        to="/register"
                        className="rounded-md px-3 py-2 text-[15px] font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Register
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleToggle}
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-white bg-blue-700"
                        type="button"
                      >
                        <NavLink
                        className="rounded-sm px-3 py-2 text-[15px] font-medium text-gray-300"
                        >
                          {auth?.user?.name}
                        </NavLink>
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <div
                        id="dropdown"
                        className="hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <NavLink to="/dashboard"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Dashboard
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/login"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Logout
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}

                  <NavLink
                    to="/cart"
                    className="rounded-md  bg-gray-900 px-3 py-2 text-[15px] font-medium text-white"
                    aria-current="page"
                  >
                    Cart (0)
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to="/"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Login
            </NavLink>
            <NavLink
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Register
            </NavLink>
            <NavLink
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Cart(0)
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
