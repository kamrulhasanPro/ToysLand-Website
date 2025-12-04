import React from "react";
import { Link } from "react-router";

const NewToys = ({ data = [] }) => {
  const sorted = data
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);
  console.log(sorted);
  return (
    <div>
      {/* title */}
      <div className="flex flex-wrap items-center justify-between gap-1">
        <p className="section-title">New Toys</p>
        <Link to={"/category/0"} className="all-items">
          All Toys
        </Link>
      </div>

      {/* show */}
      <div className="grid xs_col_1 grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">
        {sorted.map((toy) => (
          <div key={toy.toyId} className="">
            <figure className="h-48 rounded-2xl overflow-hidden shadow relative group transition-all duration-150 hover:scale-105 hover:shadow-primary hover:shadow-sm">
              <img
                src={toy.pictureURL}
                alt=""
                className="h-full w-full object-cover"
              />
              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
             w-full h-full bg-black/50 absolute z-10 top-0 left-0 
             flex items-center justify-center"
              >
                {/* button */}
                <Link to={`/toys-details/${toy.toyId}`} className="my_btn">
                  View More
                </Link>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewToys;
