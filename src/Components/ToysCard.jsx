import React from "react";
import { CiStar } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";

const ToysCard = ({toys}) => {
  const {toyName, price, rating, availableQuantity, pictureURL} = toys
  return (
    <div className="p-4 border-gray-200 border rounded-xl 
    flex flex-col gap-3 shadow-sm hover:shadow-lg transition-shadow">
      {/* toys image */}
      <figure className="rounded-md overflow-hidden h-48">
        <img src={pictureURL} alt={toyName} className="w-full h-full object-cover object-center"/>
      </figure>

      {/* content */}
      <div className="flex flex-col gap-0.5 grow">
        {/* title */}
        <p className="text-2xl text-neutral font-medium grow">{toyName}</p>

        
        {/* rating */}
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) =>
              rating > index ? (
                <FaStar className="text-accent" />
              ) : (
                <FaRegStar className="text-accent" />
              )
            )}
            <p className="text-secondary-content">({rating})</p>
          </div>

          {/* quantity */}
          {availableQuantity === 0 ? <p className="text-red-400 font-medium text-lg">Out Stock</p> : <p className="text-green-400 font-medium text-lg">Available Stock: {availableQuantity}</p>}
        

        {/* price */}
        <p className="text-xl font-semibold">{price}$</p>
      </div>

      <div>
        <button className="btn bg-secondary/60 hover:bg-secondary text-sm text-primary-content">View More</button>
      </div>
    </div>
  );
};

export default ToysCard;
