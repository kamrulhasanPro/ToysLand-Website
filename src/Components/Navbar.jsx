import React from "react";
import MyLink from "./MyLink";
import { Link } from "react-router";
import { FaCircleUser } from "react-icons/fa6";
import MyContainer from "./MyContainer";

const Navbar = () => {
    
    const navList =<>
        <MyLink to={'/'}>Home</MyLink>
        <MyLink to={'/category/0'}>Toys</MyLink>
        <MyLink to={'/profile'}>Profile</MyLink>
    </>

  return (
    <MyContainer className="navbar">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navList}
          </ul>
        </div>
        <Link to={'/'} className="text-xl font-bold px-1.5">ToysLand</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal space-x-5 px-1">
          {navList}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <figure>
            <FaCircleUser size={40} fill="#4CC9F0"/>
            <img src="" alt="" />
        </figure>
        <Link className="btn btn-primary border-primary hover:scale-105 transition px-5 text-xl">Login</Link>
      </div>
    </MyContainer>
  );
};

export default Navbar;
