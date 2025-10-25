import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <header className="bg-secondary/20 backdrop-blur-md shadow-sm">
        <Navbar />
      </header>
      <main className="my-5">
        <Outlet/>
      </main>
    </>
  );
};

export default AuthLayout;
