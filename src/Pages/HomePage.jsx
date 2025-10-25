import React from "react";
import ImageSwiper from "../Components/ImageSwiper";
import PopularToys from "../Components/HomeCompnent/PopularToys";
import RemoteControlToys from "../Components/HomeCompnent/RemoteControlToys";
import PuzzleGames from "../Components/HomeCompnent/PuzzleGames";

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
