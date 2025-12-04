import React from "react";
import allToys from "../../assets/allToys.png";
import boyToy from "../../assets/boyToy.png";
import { Link } from "react-router";

const SomeCard = () => {
  return (
    <section className="grid xs_col_1 grid-cols-2 gap-4">
      {/* main card */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-secondary/20 rounded-2xl p-4 relative">
        {/* content */}
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl md:text-4xl font-semibold ">
            15% Off All Toys Today
          </h2>
          <p className="text-gray-400">
            We are curren offering substantial discount of 15% on all toys
            available in our store
          </p>
          <Link
            to={"/category/0"}
            className="my_btn !rounded-full !hover:scale-105 !px-3"
          >
            Store Now
          </Link>
        </div>
        {/* <div className="sm:flex-1"></div> */}
        {/* img */}
        <figure className="flex-1">
          <img src={allToys}  alt="" />
        </figure>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-pink-200 rounded-2xl p-4 relative">
        {/* content */}
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl md:text-4xl font-semibold ">
            Toy for Children
          </h2>
          <p className="text-gray-400">
            The perfect toys for children combine curiosity and activity.
          </p>
          <Link
            to={"/category/0"}
            className="my_btn !rounded-full !hover:scale-105 !px-3"
          >
            Store Now
          </Link>
        </div>
        {/* img */}
        <figure className="flex-1">
          <img src={boyToy} className="w-72" alt="" />
        </figure>
      </div>
    </section>
  );
};

export default SomeCard;
