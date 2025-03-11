'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { testimonialData } from '../utils/testimonialData';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
const Testimonial = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            autoplay={{
                delay: 5500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
        >
            <div>
                {
                    testimonialData.map(testimonial => (
                        <SwiperSlide key={testimonial.id}>
                            <div className='border-t-2  py-6 p-3'>
                                <p className='text-center '> <RiDoubleQuotesL className='inline mr-3' size={20} /> {testimonial.description} <RiDoubleQuotesR className='inline ml-3' size={20} /></p>
                                <div className='flex mt-5 flex-col items-center justify-center'>
                                    <Image className="border-2 h-20 w-20 object-cover rounded-full border-[#f6b8466a] p-1" width={70} height={70} alt="Testimonial" src={testimonial.image} />
                                    <div className='ml-3'>
                                        <p className="font-semibold text-lg">{testimonial.name}</p>
                                        <p className="text-slate-500 text-sm text-center">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </div>
        </Swiper >
    );
};

export default Testimonial;