import React from "react";
import RoadmapCards from "../components/RoadmapCards";

function MemeCards() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
     
      <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30">
      Our Products
        </h2>
        

      <div className=" flex items-center gap-4 justify-between flex-col sm:flex-row">
      
        <div className=" w-full">
            <p className=" font-groot-one text-xl sm:text-3xl text-black font-semibold  py-2">
            Get ready for a wild ride with Spider Monkey's crazy meme creations, outrageous NFTs, lightning-fast trading bot, and immersive gaming experiences. We're all about bringing the fun to crypto!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one text-black  font-medium">
              1. Expansion of Spider Monkey Meme Universe: More memes, more laughs!
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one  text-black font-medium">
              2. NFT Marketplace Launch: Own a piece of Spider Monkey history with our unique NFTs.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one text-black font-medium">
              3. Enhancements to Trading Bot: Stay ahead of the game with our upgraded bot.

            </h1>
            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one text-black font-medium">
              4. Gaming Integration: Level up your gaming experience with Spider Monkey!

            </h1>
          </div>
       

        <div className=" max-w-full sm:max-w-xl">
          <RoadmapCards/>

        </div>
      </div>
    </div>
  );
}

export default MemeCards;
