import React from 'react';
import AdvantagesCard from './AdvantagesCard';
import { useTranslation } from "react-i18next";
import '../i18n';
import '../hooks/use-localstorage';
import '../styles/css/AdvantagesSection.css';

const AdvantagesSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="advantages">
            <h2 id="advantages">{t('advantages')}</h2>
            <div className="cards-container">
                <AdvantagesCard 
                    titleId="advantages-effective" 
                    descriptionId="advantages-translators"
                    iconClass="fi fi-tr-lesson"
                />
                <AdvantagesCard 
                    titleId="advantages-course" 
                    descriptionId="advantages-opportunity"
                    iconClass="fi fi-rr-clock"
                    cardId="second-card"
                />
                <AdvantagesCard 
                    titleId="advantages-textbooks" 
                    descriptionId="advantages-range"
                    iconClass="fi fi-tr-student-alt"
                />
            </div>
        </section>
    );
};

export default AdvantagesSection;
