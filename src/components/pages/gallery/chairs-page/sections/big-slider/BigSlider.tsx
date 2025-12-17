"use client";
import React from "react";
// Swiper React komponentlarini import qilish
import { Swiper, SwiperSlide } from "swiper/react";
import "./bigslider.scss";

// Swiper stillarini import qilish
import "swiper/css";
import "swiper/css/pagination";

// Kerakli modullarni import qilish
import { Autoplay, Pagination } from "swiper/modules";

const BigSlider = () => {
  return (
    <div className="bigslider">
      <Swiper
        slidesPerView={"auto"} // Slayd kengligini CSS orqali boshqarish
        centeredSlides={true} // Aktiv slayd o'rtada bo'ladi
        spaceBetween={20} // Slaydlar orasi
        loop={true} // Infinity scroll (cheksiz aylanish)
        autoplay={{
          delay: 5000, // 5 soniyada bir suriladi
          disableOnInteraction: false, // Foydalanuvchi tekkandan keyin ham to'xtamaydi
        }}
        pagination={{ clickable: true, enabled: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="custom-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="custom-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="custom-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="custom-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="custom-slide">Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BigSlider;
