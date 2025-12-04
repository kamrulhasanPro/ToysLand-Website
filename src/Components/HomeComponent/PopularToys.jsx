import React from "react";
import ToysCard from "../ToysCard";
import { Link } from "react-router";

const PopularToys = ({ data: toysData }) => {
  const popularToys = toysData.filter((toys) => toys.rating === 5);
  return (
    <section>
      {/* title */}
      <div className="flex flex-wrap items-center justify-between gap-1">
        <p className="section-title">Popular Toys</p>
        <Link to={"/category/0"} className="all-items">
          All Toys
        </Link>
      </div>

      {/* popular product */}
      <div className="grid xs_col_1 grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-4 mt-7">
        {popularToys.slice(0,4).map((toys) => (
          <ToysCard key={toys.toyId} toys={toys} />
        ))}
      </div>
    </section>
  );
};

export default PopularToys;
