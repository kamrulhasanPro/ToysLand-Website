import React from "react";
import ImageSwiper from "../Components/ImageSwiper";
import PopularToys from "../Components/HomeComponent/PopularToys";
import RemoteControlToys from "../Components/HomeComponent/RemoteControlToys";
import PuzzleGames from "../Components/HomeComponent/PuzzleGames";
import { useLoaderData } from "react-router";

const HomePage = () => {
  const {data} = useLoaderData()
  return (
    <div className="space-y-16">
      <ImageSwiper />
      <PopularToys data={data}/>
      <RemoteControlToys data={data}/>
      <PuzzleGames data={data}/>
    </div>
  );
};

export default HomePage;
