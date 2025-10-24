import React from "react";
import { CiStar } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";

const ToysCard = () => {
  return (
    <div className="p-4 border-gray-200 border rounded-xl space-y-4 mt-7">
      {/* toys image */}
      <figure className="bg-primary/50 rounded-md h-48">
        <img src="/vite.svg" alt="" />
      </figure>

      {/* content */}
      <div className="space-y-0.5">
        {/* title */}
        <p className="text-2xl text-neutral font-medium">Rocker Best Kids Toys</p>

        <div className="flex flex-wrap items-center gap-1 justify-between">
        {/* rating */}
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) =>
              3 > index ? (
                <FaStar className="text-accent" />
              ) : (
                <FaRegStar className="text-accent" />
              )
            )}
            <p className="text-secondary-content">(3)</p>
          </div>

          {/* quantity */}
          {5 === 0 ? <p className="text-red-400 font-medium text-lg">Out Stock</p> : <p className="text-green-400 font-medium text-lg">Available Stock: 5</p>}
        </div>

        {/* price */}
        <p className="text-xl font-semibold">Tk 15000</p>
      </div>

      <div>
        <button className="btn bg-secondary/60 hover:bg-secondary text-lg text-primary-content">View More</button>
      </div>
    </div>
  );
};

export default ToysCard;
