import React from 'react';

import BookSwiper from './BookSwiper';

import { useTranslation } from "react-i18next";
import '../i18n';
import '../hooks/use-localstorage';

import '../styles/css/BooksSection.css';

import DraggableGif from '../images/draggable.gif';

const BooksSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="books">
                <h2 id="book-store">{t('book-store')}</h2>
                <div className="gif-container">
                    <img src={DraggableGif} alt="" className="draggable" />
                </div>
                <div className="swiper books-swiper">
                    <BookSwiper />
                </div>
            </section>
        </>
    );
};

export default BooksSection;