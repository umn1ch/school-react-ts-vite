import React from 'react';
import { useTranslation } from "react-i18next";
import '../i18n';
import '../hooks/use-localstorage';
import '../styles/css/AdvantagesCard.css';

interface AdvantagesCardProps {
    iconClass: string;
    cardId?: string;
}

const AdvantagesCard: React.FC<AdvantagesCardProps> = (props) => {
    const { t } = useTranslation();

    return (
        <div className="card-container">
            <div className="advantages-card" id={props.cardId}>
                <i className={props.iconClass}></i>
                <div className="card-title" id={props.titleId}>{t(props.titleId)}</div>
                <div className="card-description" id={props.descriptionId}>{t(props.descriptionId)}</div>
            </div>
        </div>
    );
}

export default AdvantagesCard;
