import React from 'react';

import Floater from '../components/Floater';
import Header from '../components/Header';
import SwiperComponent from '../components/Swiper';
import VideoSection from '../components/VideoSection';
import AdvantagesSection from '../components/AdvantagesSection';

function HomePage () {
    return (
        <>
        <Floater />
        <Header />
        <SwiperComponent /> 
        <VideoSection />
        <AdvantagesSection />
        </>
    );
}

export default HomePage;