import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const ToysCard = ({ toys }) => {
  const { toyName, price, rating, availableQuantity, pictureURL, toyId } = toys;

  return (
    <div
      className="border-gray-200 border rounded-xl 
    flex flex-col gap-3 shadow-sm hover:shadow-lg transition overflow-hidden hover:scale-102 duration-300 hover:border-primary group bg-white"
    >
      {/* toys image */}
      <figure className="rounded-md overflow-hidden h-48 2xl:h-72  relative">
        {/* quantity */}
        <div className="absolute z-20 right-2 top-2">
          {availableQuantity === 0 ? (
            <button className="bg-red-400 py-0.5 px-1 text-white rounded-full">
              Out Stock
            </button>
          ) : (
            <button className="bg-green-400 py-0.5 px-1 text-white rounded-full">
              in Stock
            </button>
          )}
        </div>

        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-full object-cover object-center scale-70 group-hover:scale-75 transition"
        />
      </figure>

      {/* content */}
      <div className="p-4 flex flex-col gap-0.5 grow">
        {/* title */}
        <p className=" text-neutral font-medium grow">{toyName}</p>

        {/* rating */}
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={rating > index ? "text-[#FF8C00]" : "text-gray-300"}
              size={14}
            />
          ))}
          <p className="text-secondary-content">({rating})</p>
        </div>

        <div className="flex items-center justify-between">
          {/* price */}
          <p className="text-xl font-semibold">{price}$</p>

          {/* button */}
          <Link to={`/toys-details/${toyId}`} className="my_btn">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
