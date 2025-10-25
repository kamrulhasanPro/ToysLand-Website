import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import {useAuth} from '../Hooks/useAuth';
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {loginUser, loader, setLoader} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const loginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    //login
    loginUser(email, password)
    .then(() => {
      toast.success('login Success')
      navigate(location?.state || '/')
    })
    .catch(err => {
      console.log(err);
      toast.error(err.code)
      setLoader(false)
    })

  }

  return (
    <div className="max-w-[600px] mx-auto bg-secondary/40 p-10 rounded-md mt-2.5 shadow-md">
      <p className="text-center text-4xl font-semibold">Login your account</p>
      <hr className="my-10 border-1 border-base-200" />
      <form onSubmit={loginSubmit} className="flex flex-col">
        {/* email */}
        <label
          className="text-xl text-neutral font-semibold mb-2 mt-5"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className="my-input"
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="Enter your email address"
        />

        {/* password */}
        <label
          className="text-xl text-neutral font-semibold mb-2 mt-5 relative"
          htmlFor="password"
        >
          Password
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 p-4 -bottom-15.5 cursor-pointer"
          >
            {showPassword ? <IoEye /> : <IoEyeOff />}
          </div>
        </label>
        <input
          className="my-input !pr-12"
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          autoComplete="password"
          placeholder="Enter your password"
        />

        {/* forget */}
        <p className="cursor-pointer mt-2 text-secondary-content hover:text-neutral inline">
          Forget Password
        </p>

        <button className="btn btn-secondary text-xl  mt-5 ">{loader && <Spinner/>}Login</button>
      </form>

      {/* don't account */}
      <p className="text-center mt-5">
        don't Have An Account ?{" "}
        <Link to={"/register"} className="text-primary-content underline text-lg">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;