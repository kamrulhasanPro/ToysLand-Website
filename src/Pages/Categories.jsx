import React, { useEffect, useState } from "react";
import ToysCard from "../Components/ToysCard";
import CategoryItem from "../Components/CategoryItem";
import { useLoaderData, useParams } from "react-router";
import Spinner from "../Components/Spinner";

const Categories = () => {
  const { id } = useParams();
  const { data: toysData } = useLoaderData();
  const [kidsToys, setKidsToys] = useState([]);
  const [loader, setLoader] = useState(true);
  const [sorting, setSorting] = useState("");

  useEffect(() => {
    setLoader(true);
    if (id == 0) {
      setTimeout(() => {
        setKidsToys(toysData);
        return setLoader(false);
      }, 500);
    } else {
      const filter = toysData.filter((toys) => toys.category_id == id);
      setTimeout(() => {
        setKidsToys(filter);
        setLoader(false);
      }, 500);
      // console.log(filter);
    }
  }, [toysData, id]);

  if (sorting === "High-Low") {
    kidsToys.sort((a, b) => b.price - a.price);
  }
  if (sorting === "Low-High") {
    kidsToys.sort((a, b) => a.price - b.price);
  }

  console.log(sorting);
  return (
    <section>
      <title>ToysLand || Toys</title>
      <CategoryItem setSorting={setSorting} />

      {/* category wise toys */}
      <div className="grid xs_col_1 grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-7">
        {loader ? (
          <div className="col-span-5 mx-auto">
            <Spinner />
          </div>
        ) : (
          kidsToys.map((toys) => <ToysCard key={toys.toyId} toys={toys} />)
        )}
      </div>
    </section>
  );
};

export default Categories;
