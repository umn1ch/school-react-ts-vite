import React from 'react';

import { useTranslation } from "react-i18next";
import '../i18n';
import '../hooks/use-localstorage';
// import CallToActionForm from './CallToActionForm';

import '../styles/css/CallToActionSection.css';

const CallToActionSection = () => {
    const { t } =  useTranslation();
    
    return (
    <div className="blur">
        <section className="info-section" id="apply">
            <div className="info-content">
                <h3 id="start-speaking">{t('start-speaking')}</h3>
                <h2 id="why">{t('why')}<span className="highlight" id="choose"></span></h2>
                <p id="info-description">
                    {t('info-description')}
                </p>
                <div className="stats">
                    <div className="stat-item">
                        <span className="stat-number">10</span>
                        <span className="stat-label" id="stats-books">{t('stats-books')}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">94</span>
                        <span className="stat-label" id="stats-courses">{t('stats-courses')}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">30</span>
                        <span className="stat-label" id="stats-experience">{t('stats-experience')}</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default CallToActionSection; 