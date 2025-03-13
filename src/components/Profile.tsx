"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

import thirdImage from "../../public/portfolio background image/dev-bg-4-1200x744.jpg";
import secondImage from "../../public/portfolio background image/dev-bg-3-1200x812.jpg";
import firstImage from "../../public/portfolio background image/dev-bg-1200x800.jpg";
const Profile = () => {
  return (
    <div className="w-full my-4 md:my-4 lg:my-0 relative mb-[260px] md:mb-[260px]">
      <div className="rounded-lg">
        <Swiper
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          effect={"fade"}
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div className="h-[300px]">
              <Image
                alt=""
                className="w-full object-cover rounded-lg h-[300px]"
                height={300}
                src={firstImage}
                width={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[300px]">
              <Image
                alt=""
                className="w-full object-cover rounded-lg h-[300px]"
                height={300}
                src={secondImage}
                width={300}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[300px]">
              <Image
                alt=""
                className="w-full object-cover rounded-lg h-[300px]"
                height={300}
                src={thirdImage}
                width={300}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className=" absolute w-full bottom-[-230px] z-40 right-0 border bg-white"
        style={{ borderRadius: "50% 50% 100% 0% / 20% 20% 0% 20%" }}
      >
        <div className=" flex flex-col items-center my-3">
          <div className="h-[80px] w-[150px]" />
        </div>
        <div>
          <Image
            alt=""
            className="rounded-full border-2 border-white z-40 shadow-2xl absolute top-[-60px] m-auto left-0 right-0 h-[150px] w-[150px] "
            height={300}
            priority={true}
            src="https://res.cloudinary.com/depy0i4bl/image/upload/v1741533508/New_Project_2_nocpmp.jpg"
            width={300}
          />
          <div className="rounded-full bg-gradient-to-r from-[#FDEBCB] absolute top-[-50px] m-auto left-0 right-5 h-[150px] w-[150px] " />
          <h1 className="text-3xl font-bold text-center">Bulbul Ahammed</h1>
          <div className="">
            <p className="text-sm text-center text-gray-500">Web Developer</p>
            <div className="flex justify-center">
              <TypeAnimation
                className="text-[#f0b13e]"
                repeat={Infinity}
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Frontend Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Backend Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "Programmer",
                  1000,
                ]}
                speed={50}
                style={{ fontSize: "16px", display: "inline-block" }}
                wrapper="span"
              />
            </div>
            <div className="flex gap-x-3 justify-center items-center mt-4">
              <Link href="https://github.com/Bulbul-Programing" target="_blank">
                <FaGithub size={26} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/bulbul-ahammed-riad"
                target="_blank"
              >
                <CiLinkedin size={29} />
              </Link>
            </div>
          </div>
          <div className="flex justify-between mt-5 items-center shadow-xl">
            <button
              className="w-full flex items-center justify-between text-lg font-medium border px-3 py-4"
              type="button"
            >
              Download CV <FaCloudDownloadAlt size={16} />
            </button>
            <Link className="w-full" href="/#contact">
              <button
                className="w-full flex items-center justify-between text-lg font-medium border px-3 py-4"
                type="button"
              >
                Contact Me <FaLocationArrow size={16} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
