import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import '../styles/css/Swiper.css';

const BookSwiper: React.FC = () => {
    return (
        <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false}}
        breakpoints={{
            0 : {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1150: {
                slidesPerView: 3,
            }
        }}>
            <SwiperSlide><div className="swiper-slide"><img src="../src/images/azerbaijani readng.jpg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/azerbaijani phrases.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/azerbaijani listening.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/chinese.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/german.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/hungarian.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/italian.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/japanese.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/korean.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/romainian.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/spanish.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/turkish.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/ukrainian.jpeg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src="../images/urdu.jpeg" alt="" /></div></SwiperSlide>
        </Swiper>
    );
};

export default BookSwiper;