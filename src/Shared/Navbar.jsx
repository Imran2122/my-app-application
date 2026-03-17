import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "underline text-[#6D37E5]" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "underline" : "")}
        to="/apps"
      >
        Apps
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "underline" : "")}
        to="/installation"
      >
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="gap-3  menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img className="w-10 h-10" src="/assets/logo.png" alt="" />
          <a className=" text-xl">HERO.IO</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="lg:text-xl menu menu-horizontal px-1 gap-3">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <img src="/assets/" alt="" />
        <a className="btn bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500">
          <FaGithub></FaGithub>
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
