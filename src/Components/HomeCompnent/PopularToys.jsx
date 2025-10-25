import React from "react";
import ToysCard from "../ToysCard";
import { useAuth } from "../../Hooks/useAuth";
import { Link } from "react-router";

const PopularToys = () => {
  const { toysData } = useAuth();
  const popularToys = toysData.filter((toys, index) => index % 4 == 0);

  return (
    <section>
      {/* title */}
      <div className="flex flex-wrap items-center justify-between gap-1">
        <p className="section-title">Popular Toys</p>
        <Link className="all-items">All Toys</Link>
      </div>

      {/* popular product */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-7">
        {popularToys.map((toys) => (
          <ToysCard key={toys.toyId} toys={toys} />
        ))}
      </div>
    </section>
  );
};

export default PopularToys;
