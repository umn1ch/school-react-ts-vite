import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { useTranslation } from "react-i18next";
import '../i18n';
import '../hooks/use-localstorage';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import '../styles/css/Swiper.css';

import Slide1Image from '../images/slider_1.png';
import Slide2Image from '../images/slider_2.png';


const SwiperComponent: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
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
                <div className="text-slide-1 swiper-text" id="swiper-learn">{t ('swiper-learn')}</div>
                <div className="button-container">
                    <a href="https://wa.me/994702260990">
                        <div className="basic-button apply-button" id="swiper-apply1">{t('swiper-apply1')}</div>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slide2Image} alt="Slide 2" />
                <div className="text-slide-2 swiper-text" id="swiper-global">{t('swiper-global')}</div>
                <div className="button-container">
                    <a href="https://wa.me/994702260990">
                        <div className="basic-button apply-button" id="swiper-apply2">{t('swiper-apply2')}</div>
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
