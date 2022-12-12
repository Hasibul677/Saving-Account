import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState("hidden");

  const menuBar = () => {
    menu === "hidden" ? setMenu("block") : setMenu("hidden");
  };
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-gray-200 px-6 py-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="w-36" src="https://7staruae.com/wp-content/uploads/2022/07/7-Star-Logo-New-04.png" alt=""/>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={menuBar}
            className="flex items-center px-3 py-2 border rounded text-indigo-600 border-indigo-800 hover:text-black hover:border-black"
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
          className={`${menu} w-full flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium"
            >
              HOME
            </Link>

            <Link
              to="/members"
              className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium"
            >
              MEMBERS
            </Link>

            <Link
              to="/saving"
              className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium"
            >
              SAVING
            </Link>
            <Link
              to="/report"
              className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium"
            >
              REPORT
            </Link>
          </div>
          <div className="flex flex-col md:flex-row">
            <Link to="/login">
              <button className="inline-flex w-24 items-center bg-white border border-gray-200 shadow py-1 md:py-2 px-3 focus:outline-none hover:bg-indigo-400 hover:text-white hover:font-bold rounded text-base mt-4 md:mt-0 uppercase">
                Sign-In
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
