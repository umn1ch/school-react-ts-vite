import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/css/Swiper.css';
import 'swiper/css/autoplay';

import SlideImage1 from '../images/azerbaijani readng.jpeg';
import SlideImage2 from '../images/azerbaijani phrases.jpeg';
import SlideImage3 from '../images/azerbaijani listening.jpeg';
import SlideImage4 from '../images/chinese.jpeg';
import SlideImage5 from '../images/german.jpeg';
import SlideImage6 from '../images/hungarian.jpeg';
import SlideImage7 from '../images/italian.jpeg';
import SlideImage8 from '../images/japanese.jpeg';
import SlideImage9 from '../images/ukrainian.jpeg';
import SlideImage10 from '../images/turkish.jpeg';
import SlideImage11 from '../images/romainian.jpeg';
import SlideImage12 from '../images/spanish.jpeg';
import SlideImage13 from '../images/korean.jpeg';
import SlideImage14 from '../images/urdu.jpeg';

import { Autoplay } from 'swiper/modules';

const BookSwiper: React.FC = () => {
    return (
        <Swiper 
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false
        }}
        breakpoints={{
            0: {
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
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage1} alt="Slide 1" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage2} alt="Slide 2" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage3} alt="Slide 3" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage4} alt="Slide 4" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage5} alt="Slide 5" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage6} alt="Slide 6" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage7} alt="Slide 7" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage8} alt="Slide 8" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage9} alt="Slide 9" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage10} alt="Slide 10" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage11} alt="Slide 11" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage12} alt="Slide 12" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage13} alt="Slide 13" /></div></SwiperSlide>
            <SwiperSlide><div className="swiper-slide"><img src={SlideImage14} alt="Slide 14" /></div></SwiperSlide>
        </Swiper>
    );
};

export default BookSwiper;
