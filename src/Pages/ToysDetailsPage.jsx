import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ToysDetails from "../Components/ToysDetails";
import Spinner from "../Components/Spinner";

const ToysDetailsPage = () => {
  const { toysId } = useParams();
  const { data } = useLoaderData();
  const [toy, setToy] = useState({});
  const [loader, setLoader] = useState(true);
  const [relativeToys, setRelativeToys] = useState([]);
  useEffect(() => {
    const find = data.find((toy) => toy.toyId == toysId);
    setToy(find);
    const relativeFilteringToy = data
      .filter((toy) => toy.category_id == find.category_id)
      .slice(0, 4);
    setRelativeToys(relativeFilteringToy);
    setLoader(false);
  }, [toysId, data]);

  if (loader) {
    return <Spinner className={"flex items-center justify-center grow"} />;
  }

  return (
    <section>
      <ToysDetails toy={toy} relativeToys={relativeToys} />
    </section>
  );
};

export default ToysDetailsPage;
