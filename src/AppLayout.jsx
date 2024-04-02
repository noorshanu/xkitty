import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
// import React, { useState, useRef } from "react";
import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";

import Footer from "./sections/Footer";
// import Music from "./nubshiba.mp3";
import Mission from "./sections/Mission";
import AboutUs from "./sections/AboutUs";

// const Popup = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-lg">
//       <div className="rounded-lg p-8">
//         <button
//           className="bg-[#c74786] rounded-full px-6 py-2 text--2xl sm:text-5xl font-kid  font-bold border-2 hover:scale-125"
//           onClick={onClose}
//         >
//           Nubshib - $NUBS
//         </button>
//       </div>
//     </div>
//   );
// };

function AppLayout() {
  // const [showPopup, setShowPopup] = useState(true);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audioRef = useRef(null);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  //   // Start playing music here
  //   const audio = audioRef.current;
  //   audio.play();
  //   setIsPlaying(true);
  // };

  // const handlePlayPause = () => {
  //   const audio = audioRef.current;
  //   if (isPlaying) {
  //     audio.pause();
  //     setIsPlaying(false);
  //   } else {
  //     audio.play();
  //     setIsPlaying(true);
  //   }
  // };

  return (
    <>
      {/* {showPopup && <Popup onClose={handleClosePopup} />} */}
      <main className=" bg-main pb-4 ">
        <Navbar />

        <Hero />
        {/* <div className=" flex justify-center my-4 ">
          <button
            className="bg-[#c74786] text-black font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline  hover:scale-125"
            onClick={handlePlayPause}
          >
            {isPlaying ? "Pause " : "Play Music"}
          </button>
        
        </div> */}
        <a
          href="https://solscan.io/token/2AGhpsnK3Re2dWVPVwiL795FTqFbAvoXvwztm26wNM2t"
          target="_blank"
          className="bg-[#525252]  text-white font-bold py-2 px-2 sm:px-16 border-2  sm:text-2xl text-xs rounded-full   flex justify-center w-[360px] sm:w-[680px] mx-auto"
        >
          2AGhpsnK3Re2dWVPVwiL795FTqFbAvoXvwztm26wNM2t
        </a>
      </main>

      <MemeMark />

      <div>
        <div>
          <AboutUs/>
        </div>
        <dl className="h-[50px]" />
        {/* <Intro /> */}
        <dl className="h-[50px]" />

        <Mission />
        {/* <div>
          <Photo/>
        </div> */}
        {/* <div className=" bg-[#ffffff]">
        <MemeCards />
        </div> */}
        {/* <div>
          <RoadMap/>
        </div> */}
        {/* <div>
          <Partner />
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
