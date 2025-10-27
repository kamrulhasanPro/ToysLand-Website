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

  return (
    <section>
      <title>ToysLand || Toys</title>
      <CategoryItem />

      {/* category wise toys */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 mt-7">
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
