import React, { use } from "react";
import { NavLink, useParams } from "react-router";
const promise = fetch("/categories.json").then((res) => res.json());
const CategoryItem = () => {
  const categories = use(promise);
  console.log(categories);
    const {id} = useParams()
    console.log(id);
  return (
    <section className="my-7 space-y-7">
      <div className="category-nav flex gap-7">
        {categories.map((category) => {
          return (
            <NavLink
              to={`/category/${category.categoryId}`}
              className=" flex flex-col items-center text-neutral hover:text-secondary hover:scale-110 transition-all"
            >
              <figure className="w-16 h-16 bg-secondary/20 rounded-full overflow-hidden p-0.5 hover:shadow-lg transition-shadow">
                <img
                  src={category.imageURL}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </figure>
              <p className="text-lg font-medium ">{category.categoryName}</p>
            </NavLink>
          );
        })}
      </div>
      <p className="section-title">
        {
            categories.map(category => id == category.categoryId && category.categoryName)
        }
      </p>

    </section>
  );
};

export default CategoryItem;
