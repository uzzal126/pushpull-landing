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
                      <div className="text-2xl text-left font-semibold pt-20 pb-5 md:pb-0 group text-white hover:text-primary">
                        <Link
                          href={`${service.id}`}
                          className="flex items-center leading-none "
                        >
                          Click to experience
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="mt-1.5 fill-white group-hover:fill-primary"
                          >
                            <path d="M6.7168 13.55L10.5501 9.71667L6.7168 5.88334L7.88346 4.71667L12.8835 9.71667L7.88346 14.7167L6.7168 13.55Z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="text-right overflow-hidden rounded-tl-[70px] rounded-br-[70px]">
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
