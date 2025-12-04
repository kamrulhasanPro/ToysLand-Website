import React from "react";
import ImageSwiper from "../Components/ImageSwiper";
import PopularToys from "../Components/HomeComponent/PopularToys";
import RemoteControlToys from "../Components/HomeComponent/RemoteControlToys";
import PuzzleGames from "../Components/HomeComponent/PuzzleGames";
import { useLoaderData } from "react-router";
import SomeCard from "../Components/HomeComponent/SomeCard";
import NewToys from "../Components/HomeComponent/NewToys";
import NewsLatter from "../Components/HomeComponent/NewsLatter";

const HomePage = () => {
  const {data} = useLoaderData()
  console.log(data);
  return (
    <div className="space-y-16">
      <ImageSwiper/>
      <PopularToys data={data}/>
      <SomeCard/>
      <NewToys data={data}/>
      <RemoteControlToys data={data}/>
      {/* <PuzzleGames data={data}/> */}
      <NewsLatter/>
    </div>
  );
};

export default HomePage;
