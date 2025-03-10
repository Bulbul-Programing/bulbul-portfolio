'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { Navbar } from '@/src/components/navbar';
import React, { ReactNode } from "react";
import firstImage from '../../../public/portfolio background image/dev-bg-1200x800.jpg';
import secondImage from '../../../public/portfolio background image/dev-bg-3-1200x812.jpg';
import thirdImage from '../../../public/portfolio background image/dev-bg-4-1200x744.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container bg-[#F6F6F6] px-5 py-10 p-0 mx-auto min-h-screen max-w-7xl flex-grow">
      <div className='flex gap-x-3'>
        <Navbar />
        <div style={{ boxShadow: '-10px -10px #FDEBCB' }} className=' w-5/12 relative'>
          <div className='rounded-lg'>
            <Swiper
              spaceBetween={30}
              effect={'fade'}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay, Navigation, Pagination]}
              className="mySwiper"
            >

              <SwiperSlide>
                <div className='h-[300px]'>
                  <Image alt='' className='w-full object-cover rounded-lg h-[300px]' width={400} height={300} src={firstImage} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-[300px]'>
                  <Image alt='' className='w-full object-cover rounded-lg h-[300px]' width={300} height={300} src={secondImage} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-[300px]'>
                  <Image alt='' className='w-full object-cover rounded-lg h-[300px]' width={300} height={300} src={thirdImage} />
                </div>
              </SwiperSlide>
            </Swiper >
          </div>
          <div style={{ borderRadius: "50% 50% 100% 0% / 20% 20% 0% 20%", boxShadow: '-10px 0px #FDEBCB' }} className=' absolute w-full bottom-[-230px] z-50 right-0 border bg-white'>
            <div className=' flex flex-col items-center my-3'>
              <div className='h-[80px] w-[150px]'></div>
            </div>
            <div>
              <Image priority={true} className='rounded-full border-2 border-white z-50 shadow-2xl absolute top-[-60px] m-auto left-0 right-0 h-[150px] w-[150px] ' width={300} height={300} src='https://res.cloudinary.com/depy0i4bl/image/upload/v1741533508/New_Project_2_nocpmp.jpg' alt='' />
              <div className='rounded-full bg-gradient-to-r from-[#FDEBCB] absolute top-[-50px] m-auto left-0 right-5 h-[150px] w-[150px] '></div>
              <h1 className='text-3xl font-bold text-center'>Bulbul Ahammed</h1>
              <div className=''>
                <p className='text-sm text-center text-gray-500'>Software Developer</p>
                <div className='flex justify-center'>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Frontend Developer',
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Backend Developer',
                      1000,
                      'Full Stack Developer',
                      1000,
                      'Programmer',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '16px', display: 'inline-block' }}
                    repeat={Infinity}
                    className='text-[#f0b13e]'
                  />
                </div>
                <div className='flex gap-x-3 justify-center items-center mt-4'>
                  <Link href='https://github.com/Bulbul-Programing' target='_blank'><FaGithub size={26} /></Link>
                  <Link href='https://www.linkedin.com/in/bulbul-ahammed-riad' target='_blank'><CiLinkedin size={29} /></Link>
                </div>
              </div>
              <div className='flex justify-between mt-5 items-center shadow-xl'>
                <button type="button" className='w-full flex items-center justify-between text-lg font-medium border px-3 py-4'>Download CV <FaCloudDownloadAlt size={16} /></button>
                <button type="button" className='w-full flex items-center justify-between text-lg font-medium border px-3 py-4'>Contact Me <FaLocationArrow size={16} /></button>
              </div>
            </div>
          </div>
        </div >
        <div className='w-6/12'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
