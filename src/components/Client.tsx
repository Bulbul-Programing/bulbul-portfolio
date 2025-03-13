"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip } from "@heroui/tooltip";

import { clientData } from "../utils/clientData";

const Client = () => {
  return (
    <div className="py-2">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 6,
            spaceBetween: 25,
          },
          // Laptop/PC (screen width >= 1024px)
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
        freeMode={true}
        modules={[FreeMode, Autoplay, Pagination]}
        slidesPerView={5}
        spaceBetween={10}
      >
        {clientData.map((client) => (
          <SwiperSlide key={client.id}>
            <Tooltip content={client.name}>
              <Link href={client.websiteLink} target="_blank">
                <Image
                  alt={client.name}
                  className="h-20 shadow-sm border-l hover:border-[#F6B846] rounded-md  object-cover px-5 lg:grayscale hover:grayscale-0 transition-all"
                  height={100}
                  src={client.logo}
                  width={100}
                />
              </Link>
            </Tooltip>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Client;
