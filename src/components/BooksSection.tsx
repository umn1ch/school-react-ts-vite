import React from 'react';

import BookSwiper from './BookSwiper';

import '../styles/css/BooksSection.css';

import DraggableGif from '../images/draggable.gif';

const BooksSection: React.FC = () => {
    return (
        <>
            <section className="books">
                <h2 id="book-store">Book Store</h2>
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