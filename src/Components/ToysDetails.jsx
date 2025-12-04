import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { toast } from "react-toastify";
import ToysCard from "./ToysCard";
import { Link } from "react-router";

const ToysDetails = ({ toy, relativeToys }) => {
  const {
    toyName,
    price,
    rating,
    availableQuantity,
    pictureURL,
    description,
    sellerName,
    sellerEmail,
    category_name,
    createdAt,
    category_id
  } = toy;

  const trySubmit = (e) => {
    e.preventDefault();
    toast.success("Success Your Toys");
    e.target.reset();
  };
  return (
    <div className="p-3 md:w-[calc(100vw-20vw)] mx-auto">
      {/* toys details */}
      <div className="flex flex-col sm:flex-row gap-7">
        {/* toys image */}
        <figure className="rounded-md basis-6/12 overflow-hidden bg-white">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full h-full object-cover object-center scale-75 transition-transform duration-300 hover:scale-100 hover:rotate-1"
          />
        </figure>

        {/* content */}
        <div className="basis-6/12 space-y-0.5 text-neutral">
          {/* title */}
          <p className="text-2xl font-medium">{toyName}</p>

          {/* price */}
          <p className="text-xl font-semibold text-primary mb-2">{price}$</p>

          <p className="text-gray-400 mb-3">{description}</p>

          <div className="flex items-center justify-between">
            <button className="btn btn-primary rounded-full text-white">
              <IoCartOutline size={20} />
              Buy Now
            </button>
            <div className="btn rounded-full btn-soft btn-primary hover:text-white">
              <MdFavoriteBorder size={20} />
            </div>
          </div>

          {/* product info */}
          <div className="text-sm">
            {/* rating */}
            <div className="text-sm mt-5">
              {/* quantity */}
              {availableQuantity === 0 ? (
                <p className="text-red-400 font-medium ">Out Stock</p>
              ) : (
                <p className="text-green-400 font-medium ">
                  Available Stock: {availableQuantity}
                </p>
              )}

              <div className="flex items-center gap-0.5">
                <span className="font-medium text-neutral">Rating: </span>
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
            </div>
            <p className="text-gray-500">
              <span className="font-medium text-neutral">Category: </span>
              {category_name}
            </p>
            <p className="text-gray-500">
              <span className="font-medium text-neutral">Product Id: </span>
              {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* seller details */}
          <div className="text-sm">
            <p className="text-gray-500">
              <span className="font-medium text-neutral">Seller Name: </span>
              {sellerName}
            </p>
            <p className="text-gray-500">
              <span className="font-medium text-neutral">Seller Email: </span>
              {sellerEmail}
            </p>
          </div>
        </div>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift mt-10">
        {/* description */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-semibold hover:text-primary"
          aria-label="Description"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p className="text-gray-500">{description}</p>
        </div>

        {/* review */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-semibold hover:text-primary"
          aria-label="Review"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 ">
          <div className="flex flex-col md:flex-row">
            {/* show review */}
            <div className="flex-1">
              <h5 className="text-xl font-semibold text-primary">All Review</h5>
            </div>
            {/* form */}
            <form
              onSubmit={trySubmit}
              className="flex gap-2 flex-col max-w-96 mx-auto flex-1"
            >
              <h5 className="text-xl font-semibold text-primary">Add Review</h5>
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="my-input !py-2"
              />

              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="my-input !py-2"
              />

              <textarea
                required
                type="text"
                name="content"
                placeholder="Your Review Message"
                className="my-input !py-2"
              />

              <button type="submit" className="my_btn !py-2 text-lg ">
                Try Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <section className="mt-5">
        {/* title */}
        <div className="flex flex-wrap items-center justify-between gap-1 ">
          <p className="section-title">Relative Toys</p>
          <Link to={`/category/${category_id}`} className="all-items">
            More Toys
          </Link>
        </div>

        {/* popular product */}
        <div className="grid xs_col_1 grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-4 mt-7">
          {relativeToys.map((toys) => (
            <ToysCard key={toys.toyId} toys={toys} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ToysDetails;
