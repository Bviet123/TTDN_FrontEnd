import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import Pic1 from '../../image/PlayHolder.png';
import Pic2 from '../../image/PlayHolder.png';
import Pic3 from '../../image/tải xuống (1).jpeg';
import Pic4 from '../../image/meme_fish.jpg';
import Pic5 from '../../image/Power.jpeg';
import Pic6 from '../../image/PlayHolder.png';


function Image_Slider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img className='slide-pic' src={Pic1} alt="The holder pictrue 1" />
                </div>
                <div>
                    <img className='slide-pic' src={Pic2} alt="The holder pictrue 2" />
                </div>
                <div>
                    <img className='slide-pic' src={Pic3} alt="The holder pictrue 3" />
                </div>
                <div>
                    <img className='slide-pic' src={Pic4} alt="The holder pictrue 4" />
                </div>
                <div>
                    <img className='slide-pic' src={Pic5} alt="The holder pictrue 5" />
                </div>
                <div>
                    <img className='slide-pic' src={Pic6} alt="The holder pictrue 6" />
                </div>
            </Slider>
        </div>
    );
}

export default Image_Slider;