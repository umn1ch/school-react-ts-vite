import React from 'react';

import AdvantagesCard from './AdvantagesCard';

import '../styles/css/AdvantagesSection.css'

function AdvantagesSection () {
    return (
        <>
            <section className="advantages">
                <h2 id="advantages">Our advantages</h2>
                <div className="cards-container">
                    <AdvantagesCard 
                        title="100% Effective" 
                        description="You will be taught by the best translators in English language courses"
                        iconClass="fi fi-tr-lesson"
                        titleId="advantages-effective"
                        descriptionId="advantages-translators"
                    />
                    <AdvantagesCard 
                        title="Intensive course" 
                        description="Opportunity to study according to the accelerated method of Kifayat Ahmad gizi without homework"
                        iconClass="fi fi-rr-clock"
                        titleId="advantages-course"
                        descriptionId="advantages-opportunity"
                        cardId="second-card"
                    />
                    <AdvantagesCard 
                        title="Textbooks" 
                        description="There is a wide range of additional materials and resources for our students"
                        iconClass="fi fi-tr-student-alt"
                        titleId="advantages-textbooks"
                        descriptionId="advantages-range"
                    />
                </div>
            </section>
        </>);
}

export default AdvantagesSection;