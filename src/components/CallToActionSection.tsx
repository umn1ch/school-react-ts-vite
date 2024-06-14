import React from 'react';

// import CallToActionForm from './CallToActionForm';

import '../styles/css/CallToActionSection.css';

const CallToActionSection = () => {
    return (
    <div className="blur">
        <section className="info-section" id="apply">
            <div className="info-content">
                <h3 id="start-speaking">START SPEAKING <span className="highlight" id="start-speaking-foreign">FOREIGN
                        LANGUAGE IN 48 HOURS</span></h3>
                <h2 id="why">WHY <span className="highlight" id="choose">CHOOSE US?</span></h2>
                <p id="info-description">
                    <span className="highlight" id="language-house">"The Language House"</span> is a training center
                    where studies are conducted by professional teachers, as well as native speakers. In our school
                    you can appreciate a variety of services, which include various training programs considered for
                    children and adults, for groups or one person at any level of proficiency – zero and medium.
                </p>
                <div className="stats">
                    <div className="stat-item">
                        <span className="stat-number">10</span>
                        <span className="stat-label" id="stats-books">Our books</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">94</span>
                        <span className="stat-label" id="stats-courses">Programs & Courses</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">30</span>
                        <span className="stat-label" id="stats-experience">Years of Experience</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default CallToActionSection; 