import React from 'react';
 
import '../styles/css/VideoSection.css'

import VideoSrc from '../videos/video.mp4';
import Banner from '../images/banner.jpg'

function VideoSection () {
    return (
        <>
        <section className="video">
            <video src={VideoSrc} controls></video>
            <img src={Banner} alt="" />
        </section>
        </>
    )
}

export default VideoSection;