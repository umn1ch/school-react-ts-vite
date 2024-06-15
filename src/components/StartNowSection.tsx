import React from 'react';

import '../styles/css/StartNowSection.css';

import StartNowImage from '../images/bottombanner.jpg';

const StartNowSection: React.FC = () => {
    return (
        <>
            <section className="start-now">
                <div className="start-wrapper">
                    <h2 id="start-now-start">Start now and turn your knowledge into a profitable online course</h2>
                    {/* <a href="#apply"><div class="start-button button-reverse" id="start-now-get-started">Get started now</div></a> */}
                    <a href="https://wa.me/994702260990">
                        <div className="start-button button-reverse" id="start-now-get-started">Get started now</div>
                    </a>
                </div>
                <img src={StartNowImage} alt="" />
            </section>
        </>
    );
}

export default StartNowSection;