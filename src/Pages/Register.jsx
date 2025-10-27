import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { useAuth } from "../Hooks/useAuth";
import Spinner from "../Components/Spinner";
import GoogleLogin from "../Components/GoogleLogin";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, loader, setLoader } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // random color generate
  const colorGenerator = () => {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const yellow = Math.floor(Math.random() * 255) + 1;

    const rgbColor = `rgb(${red},${green},${yellow})`;
    return rgbColor;
  };
  const randomColor = colorGenerator();

  // submit
  const registerSubmit = (e) => {
    e.preventDefault();
    const name = e.target?.name?.value;
    const photo = e.target?.photoURL?.value;
    const email = e.target?.email?.value;
    const password = e.target?.password?.value;
    const check = e.target?.terms.checked;
    const photoURL = photo ? photo : randomColor;
    // console.log(name, Boolean(photoURL), email, password, check)

    // validation
    if (password.length < 6) {
      return toast.error("Password must 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must at least one upper case");
    } else if (!/[a-z]/.test(password)) {
      return toast.error("Password must at least one lower case");
    } else if (!/[0-9]/.test(password)) {
      return toast.error("Password must at least one lower case");
    } else if (!check) {
      return toast.error("Terms and condition not accept");
    }

    // create user
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, { displayName: name, photoURL }).then().catch();
        e.target.reset();
        toast.success("Register Success");
        navigate(location?.state || "/");
      })
      .catch((err) => {
        toast.error(err.code)
        setLoader(false)
      });
  };

  return (
    <div className="max-w-[600px] mx-auto bg-secondary/40 p-10 rounded-md mt-2.5">
            <title>ToysLand || Registration</title>
      <p className="text-center text-4xl font-semibold">Register your account</p>
      <hr className="my-10 border border-base-200" />

      {/* register from */}
      <form onSubmit={registerSubmit} className="flex flex-col">
        {/* Name */}
        <label
          className="text-xl text-neutral font-semibold mb-2 mt-5"
          htmlFor="name"
        >
          Your Name
        </label>
        <input
          required
          className="my-input"
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          placeholder="Enter your name"
        />

        {/* PhotoUrl */}
        <label
          className="text-xl text-neutral font-semibold mb-2 mt-5"
          htmlFor="photoURL"
        >
          Photo URL (optional)
        </label>
        <input
          className="my-input"
          type="text"
          name="photoURL"
          id="photoURL"
          autoComplete="photoURL"
          placeholder="Enter your photo URL"
        />

        {/* email */}
        <label
          className="text-xl text-neutral font-semibold mb-2 mt-5"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          required
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
          required
          className="my-input !pr-12"
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          autoComplete="password"
          placeholder="Enter your password"
        />

        {/* checkbox */}
        <div className="flex items-center gap-2 mt-2">
          <input
            className="w-4 h-4 cursor-pointer"
            name="terms"
            type="checkbox"
            id="check"
          />
          <label htmlFor="check">Accept Term & Conditions</label>
        </div>

        <button className="btn btn-secondary text-xl  mt-5">
          {loader && <Spinner/>}Registration
        </button>
      </form>
      
      {/* google login */}
      <GoogleLogin/>

      {/* already account */}
      <p className="text-center mt-5">
        Already Have An Account ?{" "}
        <Link to={"/login"} className="text-primary-content underline text-lg">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
