import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../Hooks/useAuth";
import Swal from "sweetalert2";

const ForgetPage = () => {
  const location = useLocation();
  const isEmail = location?.state?.email;
  const navigate = useNavigate();
  const { forgetPassword } = useAuth();

  const [email, setEmail] = useState("");
  useEffect(() => {
    if (isEmail.includes("@")) {
      setEmail(isEmail);
    }
  }, [isEmail]);

  const forgetSubmit = (e) => {
    e.preventDefault();
    forgetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Check your email and reset the password.",
          icon: "success",
          draggable: true,
        });
        setEmail("");
        navigate(-1);
      })
      .catch((err) => {
        Swal.fire({
          title: `${err.code}`,
          icon: "error",
          draggable: true,
        });
      });
  };
  return (
    <div className="max-w-[600px] mx-auto bg-secondary/40 p-10 rounded-md mt-2.5 shadow-md">
      <title>ToysLand || Forget</title>
      <p className="text-center text-4xl font-semibold">Forget Password</p>
      <hr className="my-10 border border-base-200" />
      <form onSubmit={forgetSubmit} className="flex flex-col">
        {/* email */}
        <label
          className="text-xl text-neutral font-semibold mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="my-input"
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="Enter your email address"
        />
        <button className="btn btn-secondary text-xl  mt-5 ">Reset</button>
      </form>

      {/* don't account */}
      <p
        onClick={() => navigate(-1)}
        className="text-center mt-2 underline cursor-pointer"
      >
        Go Back
      </p>
    </div>
  );
};

export default ForgetPage;
