import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import '../styles/css/Swiper.css';

import Slide1Image from '../images/slider_1.png';
import Slide2Image from '../images/slider_2.png';


const SwiperComponent: React.FC = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            speed={1000}
            autoplay={{
                delay: 7500,
                disableOnInteraction: false,
            }}
            pagination={{
                el: '.swiper-pagination',
                clickable: true,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
        >
            <SwiperSlide>
                <img src={Slide1Image} alt="Slide 1" />
                <div className="text-slide-1 swiper-text" id="swiper-learn">Learn languages and connect with the world</div>
                <div className="button-container">
                    <a href="https://wa.me/994702260990">
                        <div className="basic-button apply-button" id="swiper-apply1">Apply</div>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide2Image} alt="Slide 2" />
                <div className="text-slide-2 swiper-text" id="swiper-global">Become a global citizen with multi-language</div>
                <div className="button-container">
                    <a href="https://wa.me/994702260990">
                        <div className="basic-button apply-button" id="swiper-apply2">Apply</div>
                    </a>
                </div>
            </SwiperSlide>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </Swiper>
    );
};

export default SwiperComponent;
