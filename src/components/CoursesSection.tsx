import React from 'react';

import CoursesCard from './CoursesCard';

import { useTranslation } from "react-i18next";
import '../i18n';
import '../hooks/use-localstorage';

import englishCoursesImage from '../images/English courses.png';
import azerbaijaniCoursesImage from '../images/Azerbaijani courses.png';
import russianCoursesImage from '../images/Russian courses.png';
import germanCoursesImage from '../images/German courses.png';
import spanishCoursesImage from '../images/Spanish courses.png';
import frenchCoursesImage from '../images/French courses.png';

import '../styles/css/CoursesSection.css';

function CoursesSection() {
    const { t } = useTranslation();
    return (
        <>
            <section className="courses">
                <h2 id="popular-courses">{t('popular-courses')}</h2>
                <div className="courses-container">
                    <CoursesCard
                        imageSource={englishCoursesImage}
                        title="courses-en"
                        buttonText="courses-more1"
                    />
                    <CoursesCard
                        imageSource={azerbaijaniCoursesImage}
                        title="courses-az"
                        buttonText="courses-more2"
                    />
                    <CoursesCard
                        imageSource={russianCoursesImage}
                        title="courses-ru"
                        buttonText="courses-more3"
                    />
                    <CoursesCard
                        imageSource={germanCoursesImage}
                        title="courses-de"
                        buttonText="courses-more4"
                    />
                    <CoursesCard
                        imageSource={spanishCoursesImage}
                        title="courses-sp"
                        buttonText="courses-more5"
                    />
                    <CoursesCard
                        imageSource={frenchCoursesImage}
                        title="courses-fr"
                        buttonText="courses-more6"
                    />
                </div>
            </section>
        </>
    );
}

export default CoursesSection;
