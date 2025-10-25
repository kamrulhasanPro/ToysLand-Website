import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import ToysCard from "../Components/ToysCard";
import CategoryItem from "../Components/CategoryItem";
import { useParams } from "react-router";

const Categories = () => {
    const {id} = useParams()

  const { toysData } = useAuth();
    const [kidsToys, setKidsToys] = useState([])
    useEffect(()=>{
        if(id == 0){
            return setKidsToys(toysData)
        }else{
            const filter = toysData.filter(toys => toys.category_id == id)
            setKidsToys(filter)
            // console.log(filter);
        }
    },[toysData, id])


  return (
    <section>
      <CategoryItem />
      {/* title */}
      
      {/* remote control toys */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-7">
        {kidsToys.map((toys) => (
          <ToysCard key={toys.toyId} toys={toys} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
