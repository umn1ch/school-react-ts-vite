import React from 'react';

import Floater from '../components/Floater';
import Header from '../components/Header';
import SwiperComponent from '../components/Swiper';
import VideoSection from '../components/VideoSection';
import AdvantagesSection from '../components/AdvantagesSection';
import CoursesSection from '../components/CoursesSection';

function HomePage () {
    return (
        <>
        <Floater />
        <Header />
        <SwiperComponent /> 
        <VideoSection />
        <AdvantagesSection />
        <CoursesSection  />
        </>
    );
}

export default HomePage;