import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import sliderImg from "../../assets/sliderImg.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSlider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="rounded-lg">
          <img
            className="rounded-lg max-h-96 max-w-[1175px]"
            src={sliderImg}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img
            className="rounded-lg max-h-96 max-w-[1175px]"
            src={sliderImg}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img
            className="rounded-lg max-h-96 max-w-[1175px]"
            src={sliderImg}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img
            className="rounded-lg max-h-96 max-w-[1175px]"
            src={sliderImg}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img
            className="rounded-lg max-h-96 max-w-[1175px]"
            src={sliderImg}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img
            className="rounded-lg max-h-96 max-w-[1175px]"
            src={sliderImg}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img
            className="rounded-lg max-h-96 max-w-[1175px]"
            src={sliderImg}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img
            className="rounded-lg max-h-96 max-w-[1175px]"
            src={sliderImg}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img
            className="rounded-lg max-h-96 max-w-[1175px]"
            src={sliderImg}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
