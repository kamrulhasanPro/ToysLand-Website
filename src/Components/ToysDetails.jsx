import React from "react";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";

const ToysDetails = ({ toy }) => {
  const {
    toyName,
    price,
    rating,
    availableQuantity,
    pictureURL,
    description,
    sellerName,
    sellerEmail,
  } = toy;

  const trySubmit = (e) => {
    e.preventDefault()
    toast.success('Success Your Toys')
    e.target.reset()
  }
  return (
    <div className="border border-gray-400 rounded-2xl p-3 lg:w-[calc(100vw-30vw)] mx-auto">
        {/* toys details */}
      <div className="flex flex-col sm:flex-row gap-7">
        {/* toys image */}
        <figure className="rounded-md basis-5/12 overflow-hidden h-72">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full h-full object-cover object-center"
          />
        </figure>

        {/* content */}
        <div className="basis-7/12 space-y-0.5">
          {/* title */}
          <p className="text-2xl text-neutral font-medium">{toyName}</p>

          <p>
            <span className="font-semibold">description:</span> {description}
          </p>

          {/* rating */}
          <div className="flex flex-wrap items-center justify-between gap-1">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    rating > index ? "text-[#FF8C00]" : "text-gray-300"
                  }
                  size={14}
                />
              ))}
              <p className="text-secondary-content">({rating})</p>
            </div>

            {/* quantity */}
            {availableQuantity === 0 ? (
              <p className="text-red-400 font-medium text-lg">Out Stock</p>
            ) : (
              <p className="text-green-400 font-medium text-lg">
                Available Stock: {availableQuantity}
              </p>
            )}
          </div>

          {/* price */}
          <p className="text-xl font-semibold">{price}$</p>

          {/* seller details */}
          <div>
            <p>
              <span className="font-medium">Seller Name: </span>
              {sellerName}
            </p>
            <p>
              <span className="font-medium">Seller Email: </span>
              {sellerEmail}
            </p>
          </div>
        </div>
      </div>

      {/* form */}
      <form onSubmit={trySubmit} className="flex gap-2 flex-col max-w-96 mx-auto mt-7">
            <input required type="text" name="name" placeholder="Your Name" className="my-input !py-2"/>

            <input required type="email" name="email" placeholder="Your Email" className="my-input !py-2"/>

            <button  type="submit" className="btn btn-secondary text-xl mt-2">Try Now</button>
      </form>
    </div>
  );
};

export default ToysDetails;
