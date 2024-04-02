import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import SliderNavigationButton from "./SliderNavigationButton";

function RoadmapCards() {
  return (
    <section className="px-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="py-5 [&_.swiper-slide]:!h-auto"
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: "#nextEl",
          prevEl: "#prevEl",
        }}
      >
        <SwiperSlide>
          <img
            src="images/img1.jpg"
            alt=""
            className=" rounded-xl border-black border"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="images/img3.jpg"
            alt=""
            className=" rounded-xl border-black border m-4"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="images/img4.jpg"
            alt=""
            className=" rounded-xl border-black border m-4"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="images/img5.jpg"
            alt=""
            className=" rounded-xl border-black border m-4"
          />
        </SwiperSlide>

       
      </Swiper>

      <div className="flex items-center space-x-5 justify-center mt-4">
        <SliderNavigationButton id="prevEl" className="rotate-180" />
        <SliderNavigationButton id="nextEl" />
      </div>
    </section>
  );
}

export default RoadmapCards;
