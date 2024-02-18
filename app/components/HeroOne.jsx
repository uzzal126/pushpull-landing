"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

const HeroOne = ({ services }) => {
  const renderBullet = (index, className) => {
    return `<span class="swiper-pagination-bullet custom-bullet-style ${className}"></span>`;
  };

  return (
    <div className="bg-[#3D0000] flex items-center justify-center text-center">
      <div className="container">
        <div className="hero-slider md:translate-y-[100px]">
          <Swiper
            pagination={{ clickable: true, renderBullet: renderBullet }}
            modules={[Pagination]}
            className="mySwiper"
            speed="900"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="py-10">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6">
                      <div className="text-2xl text-left text-white font-semibold pt-20 pb-5 md:pb-0">
                        <Link href={`${service.id}`}>
                          Click to experience &#129122;
                        </Link>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="text-right">
                        <Link href={`${service.id}`}>
                          <Image src={service.banner} alt={service.title} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
