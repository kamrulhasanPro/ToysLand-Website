import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ToysDetails from "../Components/ToysDetails";

const ToysDetailsPage = () => {
  const { toysId } = useParams();
  const {data} = useLoaderData()
  const [toy, setToy] = useState({});

  useEffect(() => {
    const filter = data.find((toy) => toy.toyId == toysId);
    setToy(filter);
    console.log('het');
}, [toysId, data]);


  return (
    <section>
      <ToysDetails toy={toy} />
    </section>
  );
};

export default ToysDetailsPage;
