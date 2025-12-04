import React from "react";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router";

const NavProfile = () => {
  const { user } = useAuth();
  return (
    <div className="absolute bg-white p-2 rounded-lg w-40 right-1/12 shadow-md">
      <p className="text-center text-xl">{user.displayName}</p>
      <Link
        to={"/profile"}
        className="btn btn-success text-white mt-2  btn-block"
      >
        profile
      </Link>
      
    </div>
  );
};

export default NavProfile;
