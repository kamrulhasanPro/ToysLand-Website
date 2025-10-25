import React from "react";
import { useAuth } from "../../Hooks/useAuth";
import ToysCard from "../ToysCard";
import { Link } from "react-router";

const RemoteControlToys = () => {
  const { toysData } = useAuth();
  const remoteToys = toysData.filter(
    (toys) => toys.category_name === "Remote Control Cars"
  );

  return (
    <section>
      {/* title */}
      <div className="flex flex-wrap items-center justify-between gap-1">
        <p className="section-title">Remote Control Toys</p>
        <Link to={'/category/2'} className="all-items">More Toys</Link>
      </div>

      {/* remote control toys */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
        {remoteToys.map(
          (toys, index) =>
            index < 3 && <ToysCard key={toys.toyId} toys={toys} />
        )}
      </div>
    </section>
  );
};

export default RemoteControlToys;
