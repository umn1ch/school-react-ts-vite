import React from 'react';

import Floater from '../components/Floater';
import Header from '../components/Header';
import SwiperComponent from '../components/Swiper';
import VideoSection from '../components/VideoSection';
import AdvantagesSection from '../components/AdvantagesSection';
import CoursesSection from '../components/CoursesSection';
import CallToActionSection from '../components/CallToActionSection';
import BooksSection from '../components/BooksSection';
import StartNowSection from '../components/StartNowSection';
import Footer from '../components/Footer';

function HomePage () {
    return (
        <>
        <Floater />
        {/* <Header /> */}
        <SwiperComponent /> 
        <VideoSection />
        <AdvantagesSection />
        <CoursesSection  />
        <CallToActionSection />
        <BooksSection  />
        <StartNowSection />
        <Footer />
        </>
    );
}

export default HomePage;