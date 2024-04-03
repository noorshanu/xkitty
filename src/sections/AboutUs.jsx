import React from "react";
// import { FaTelegram } from "react-icons/fa";

function AboutUs() {
  return (
    <section className=" container-wrapper">
      <div className=" flex justify-between items-center flex-col-reverse sm:flex-row">
        <div className="w-full">
          <img src="images/newt.png" alt="" />
        </div>

        <div className="  border border-[#0b5a66]   py-8 px-4 rounded-2xl shadow-2xl max-w-2xl ">
          <h1 className=" font-kid font-bold text-3xl sm:text-5xl my-3 text-[#000000]">
          AboutLeoCat
          </h1>

          <p className=" text-lg sm:text-xl ">
          Bid farewell to the epoch of dog memes and greetLeoCat, the supreme Prince Of Cat Memes, on the Solana blockchain. This isn't merely another token; it's a crusade in the memecoin cosmos, elevating the elegance, cleverness, and allure of cats to the pinnacle of the crypto universe.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
