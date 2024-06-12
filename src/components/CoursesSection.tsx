import React from 'react';

import CoursesCard from './CoursesCard';

import englishCoursesImage from '../images/English courses.png';
import azerbaijaniCoursesImage from '../images/Azerbaijani courses.png';
import russianCoursesImage from '../images/Russian courses.png';
import germanCoursesImage from '../images/German courses.png';
import spanishCoursesImage from '../images/Spanish courses.png';
import frenchCoursesImage from '../images/French courses.png';

import '../styles/css/CoursesSection.css';

function CoursesSection() {
    return (
        <>
            <section className="courses">
                <h2 id="popular-courses">Our Popular Courses</h2>
                <div className="courses-container">
                    <CoursesCard
                        imageSource={englishCoursesImage}
                        titleId="courses-en"
                        buttonId="courses-more1"
                        title="English Courses Hekimler Ucun"
                        buttonText="More"
                    />
                    <CoursesCard
                        imageSource={azerbaijaniCoursesImage}
                        titleId="courses-az"
                        buttonId="courses-more2"
                        title="Azerbaijani Courses"
                        buttonText="More"
                    />
                    <CoursesCard
                        imageSource={russianCoursesImage}
                        titleId="courses-ru"
                        buttonId="courses-more3"
                        title="Russian Courses"
                        buttonText="More"
                    />
                    <CoursesCard
                        imageSource={germanCoursesImage}
                        titleId="courses-de"
                        buttonId="courses-more4"
                        title="German Courses"
                        buttonText="More"
                    />
                    <CoursesCard
                        imageSource={spanishCoursesImage}
                        titleId="courses-sp"
                        buttonId="courses-more5"
                        title="Spanish Courses"
                        buttonText="More"
                    />
                    <CoursesCard
                        imageSource={frenchCoursesImage}
                        titleId="courses-fr"
                        buttonId="courses-more6"
                        title="French Courses"
                        buttonText="More"
                    />
                </div>
            </section>
        </>
    );
}

export default CoursesSection;
