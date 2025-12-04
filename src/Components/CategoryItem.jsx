import React, { use } from "react";
import { NavLink, useParams } from "react-router";
const promise = fetch("/categories.json").then((res) => res.json());
const CategoryItem = ({setSorting}) => {
  const categories = use(promise);
  const { id } = useParams();

  return (
    <section className="my-7 space-y-7">
      {/* category */}
      <div className="category-nav flex flex-wrap items-center justify-center gap-7">
        {categories.map((category) => {
          return (
            <NavLink
              key={category.categoryId}
              to={`/category/${category.categoryId}`}
              className=" flex flex-col items-center text-neutral hover:text-primary hover:scale-110 transition-all"
            >
              <figure className="w-10 h-10 sm:w-16 sm:h-16  bg-secondary/20 rounded-full overflow-hidden p-0.5 hover:shadow-lg transition-shadow">
                <img
                  src={category.imageURL}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </figure>
              <p className="hidden sm:block text-lg font-medium ">
                {category.categoryName}
              </p>
            </NavLink>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        {/* title */}
        <p className="section-title">
          {categories.map(
            (category) => id == category.categoryId && category.categoryName
          )}
        </p>

        {/* filter */}
        <select
          onChange={(e) => setSorting(e.target.value)}
          defaultValue="Sort By Price"
          className="select select-sm w-auto focus-within:border-none text-neutral outline-primary"
        >
          <option disabled={true}>Sort By Price</option>
          <option value={'High-Low'}>High-Low</option>
          <option value={"Low-High"}>Low-High</option>
        </select>
      </div>
    </section>
  );
};

export default CategoryItem;
