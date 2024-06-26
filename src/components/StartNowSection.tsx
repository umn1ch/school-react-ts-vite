import React from 'react';

import { useTranslation } from "react-i18next";
import '../i18n';
import '../hooks/use-localstorage';

import '../styles/css/StartNowSection.css';

import StartNowImage from '../images/bottombanner.jpg';

const StartNowSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="start-now">
                <div className="start-wrapper">
                    <h2 id="start-now-start">{t('start-now-start')}</h2>
                    {/* <a href="#apply"><div class="start-button button-reverse" id="start-now-get-started">Get started now</div></a> */}
                    <a href="https://wa.me/994702260990">
                        <div className="start-button button-reverse" id="start-now-get-started">{t('start-now-get-started')}</div>
                    </a>
                </div>
                <img src={StartNowImage} alt="" />
            </section>
        </>
    );
}

export default StartNowSection;