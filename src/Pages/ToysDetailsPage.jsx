import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ToysDetails from "../Components/ToysDetails";
import Spinner from "../Components/Spinner";

const ToysDetailsPage = () => {
  const { toysId } = useParams();
  const {data} = useLoaderData()
  const [toy, setToy] = useState({});
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const filter = data.find((toy) => toy.toyId == toysId);
    setToy(filter);
    setLoader(false)
}, [toysId, data]);

if(loader){
  return <Spinner className={'flex items-center justify-center grow'}/>
}

  return (
    <section>
      <ToysDetails toy={toy} />
    </section>
  );
};

export default ToysDetailsPage;
