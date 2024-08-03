import React, { useState, useEffect } from 'react';
import './slider.css';

function Slider({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, [slides]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className='slider-div'>
            {slides.map((slide, index) => (
                <img 
                    key={index}
                    src={slide.image} 
                    alt={slide.alt}
                    className={index === currentSlide ? 'slide active' : 'slide'}
                />
            ))}
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default Slider;