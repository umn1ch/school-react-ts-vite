import React from 'react';

import '../styles/css/AdvantagesCard.css';

interface AdvantagesCardProps {
    title: string;
    description: string;
    iconClass: string;
    titleId?: string;
    descriptionId?: string;
    cardId?: string;
}

const AdvantagesCard: React.FC<AdvantagesCardProps> = (props: string) => {
    return (
        <div className="card-container">
            <div className="advantages-card" id={props.cardId}>
                <i className={props.iconClass}></i>
                <div className="card-title" id={props.titleId}>{props.title}</div>
                <div className="card-description" id={props.descriptionId}>{props.description}</div>
            </div>
        </div>
    );
}

export default AdvantagesCard;