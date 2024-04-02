import React from 'react'

function RoadMap() {
  return (
<section className="relative z-10 ">
      <img
        src="images/purple.png"
        alt=""
        className=" absolute -top-[50%] right-0 -z-10 h-[600px] hidden sm:block"
      />

      <div className="container-wrapper mb-14">
        <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30 my-4">
         Our  Roadmap
        </h2>
    
  

        <div className="flex justify-between flex-col sm:flex-row gap-5">
          <div className="bg-[#10999b95] py-5 px-5  rounded-md w-[100%] h-[190px] border-2">
            <div>
            <h1 className="font-groot-one font-bold  text-white text-center  text-xl mb-1">Phase 1</h1>
             
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">• Launch and Non-stop meme creation to keep you laughing around the clock.</p>
           
          
          
          </div>

          <div className="bg-[#10999b95] py-5 px-5  rounded-md w-[100%] h-[190px]  border-2">
          <div>
          <h1 className="font-groot-one font-bold  text-white text-center  text-xl mb-1">Phase 2</h1>
           
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">• Social Blitz: Share the GabeWhite vibe everywhere with seamless social media integration & trend everywhere.</p>
           
       

          </div>
          <div className="bg-[#10999b95] py-5 px-5  rounded-md w-[100%] h-[190px] border-2">
          <div>
          <h1 className="font-groot-one font-bold  text-white text-center  text-xl mb-1">Phase 3</h1>
             
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">•  Epic Partnerships: Join forces with the best in the biz for a meme revolution like never before!.</p>


          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap