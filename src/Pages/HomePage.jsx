import React from "react";
import ImageSwiper from "../Components/ImageSwiper";
import PopularToys from "../Components/HomeComponent/PopularToys";
import RemoteControlToys from "../Components/HomeComponent/RemoteControlToys";
import PuzzleGames from "../Components/HomeComponent/PuzzleGames";

const HomePage = () => {
  
  return (
    <div className="space-y-16">
      <ImageSwiper />
      <PopularToys />
      <RemoteControlToys />
      <PuzzleGames/>
    </div>
  );
};

export default HomePage;
