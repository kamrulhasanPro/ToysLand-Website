import React from "react";
import ToysCard from "../ToysCard";
import { Link } from "react-router";

const RemoteControlToys = ({ data: toysData }) => {
  const remoteToys = toysData
    .filter((toys) => toys.category_name === "Remote Control Cars")
    .slice(0, 4);

  return (
    <section>
      {/* title */}
      <div className="flex flex-wrap items-center justify-between gap-1">
        <p className="section-title">Remote Control Toys</p>
        <Link to={"/category/2"} className="all-items">
          More Toys
        </Link>
      </div>

      {/* remote control toys */}
      <div className="grid xs_col_1 grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-7 mt-7">
        {remoteToys.map((toys) => (
          <ToysCard key={toys.toyId} toys={toys} />
        ))}
      </div>
    </section>
  );
};

export default RemoteControlToys;
