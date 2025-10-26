import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const ToysCard = ({toys}) => {
  const {toyName, price, rating, availableQuantity, pictureURL, toyId} = toys
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
              <FaStar
              key={index}
              className={
                rating > index ? "text-[#FF8C00]" : "text-gray-300"
              }
              size={14}
            />
            )}
            <p className="text-secondary-content">({rating})</p>
          </div>

          {/* quantity */}
          {availableQuantity === 0 ? <p className="text-red-400 font-medium text-lg">Out Stock</p> : <p className="text-green-400 font-medium text-lg">Available Stock: {availableQuantity}</p>}
        

        {/* price */}
        <p className="text-xl font-semibold">{price}$</p>
      </div>

      <div>
        <Link to={`/toys-details/${toyId}`} className="btn bg-secondary/60 hover:bg-secondary text-sm text-primary-content">View More</Link>
      </div>
    </div>
  );
};

export default ToysCard;
