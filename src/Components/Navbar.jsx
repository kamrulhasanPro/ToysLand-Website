import React from "react";
import MyLink from "./MyLink";
import { Link, useNavigate } from "react-router";
import { FaCircleUser } from "react-icons/fa6";
import MyContainer from "./MyContainer";
import { useAuth } from "../Hooks/useAuth";
import Swal from "sweetalert2";
import NavProfile from "./NavProfile";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const navList = (
    <>
      <MyLink to={"/"}>Home</MyLink>
      <MyLink to={"/category/0"}>Toys</MyLink>
      <MyLink to={"/profile"}>Profile</MyLink>
    </>
  );
  const logOutClick = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "Woo You are LogOut User!",
          icon: "success",
          draggable: true,
        });
        // toast.success("Log Out Success");
      })
      .catch((err) => toast.error(err.code));
  };

  const firstLatter = user?.displayName?.slice(0, 1);

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
        <Link to={"/"} className="text-xl font-bold px-1.5 flex items-center justify-center gap-1.5">
        <img src={'logo.svg'} alt="logo" />
          <p className="hidden md:block">ToysLand</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal space-x-5 px-1">{navList}</ul>
      </div>
      <div className="navbar-end dropdown dropdown-end gap-3">
        <figure className="rounded-full cursor-pointer overflow-hidden group">
          {user ? (
            user.photoURL ? (
              user.photoURL.startsWith("rgb") ? (
                <div
                  className={`bg-[${user?.photoURL}] w-10 h-10 flex items-center justify-center`}
                  style={{ background: user?.photoURL }}
                >
                  <p className="text-2xl text-white">{firstLatter}</p>
                </div>
              ) : (
                <img
                  className="w-10 h-10"
                  src={user?.photoURL}
                  alt="Profile image"
                />
              )
            ) : (
              <FaCircleUser size={40} fill="#4CC9F0" />
            )
          ) : (
            <FaCircleUser size={40} fill="#4CC9F0" />
          )}
          {user && (
            <div className="hidden group-hover:block">
              <NavProfile />
            </div>
          )}
        </figure>

        {user ? (
          <button
            onClick={logOutClick}
            className="btn btn-primary border-primary hover:scale-105 transition px-5 text-xl"
          >
            LogOut
          </button>
        ) : (
          <Link
            to={"/login"}
            className="btn btn-secondary border-secondary hover:scale-105 transition px-5 text-xl"
          >
            Login
          </Link>
        )}
      </div>
    </MyContainer>
  );
};

export default Navbar;
