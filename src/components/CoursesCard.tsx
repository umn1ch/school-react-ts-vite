import React from 'react';
import '../styles/css/CoursesCard.css';

interface CoursesCardProps {
    imageSource: string;
    titleId?: string;
    buttonId?: string;
    title: string;
    buttonText: string;
}

const CoursesCard: React.FC<CoursesCardProps> = (props) => {
    return (
        <div className="course-card">
            <div className="image-wrapper">
                <a href="" className="course-link">
                    <img src={props.imageSource} alt="" className="course-card-image" />
                </a>
            </div>
            <div className="courses-info">
                <div className="courses-title">
                    <a href="" className="courses-link" id={props.titleId}>{props.title}</a>
                </div>
                <div className="courses-more-button">
                    <a href="" className="courses-button" id={props.buttonId}>{props.buttonText}</a>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;
