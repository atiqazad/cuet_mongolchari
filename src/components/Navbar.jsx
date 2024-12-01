import React from "react";
import logo from "../../public/logo.png";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-white-300">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-2xl dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/the_team">The Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/">
            <img src={logo} className="w-12 h-12 rounded-full"></img>
          </Link>
          <p className="sm:block hidden text-xl font-bold ml-2">MongolChari</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="text-lg font-semibold menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/the_team">The Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="text-2xl flex justify-between gap-6 text-gray-500">
          <RiFacebookCircleFill></RiFacebookCircleFill>
          <FaInstagram></FaInstagram>
          <FaYoutube></FaYoutube>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
