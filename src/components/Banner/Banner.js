import React from 'react';
import './Banner.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Banner = () => {
    const settings = {
        dots: false,          // Show navigation dots
        infinite: true,      // Loop the slides
        speed: 500,          // Transition speed in ms
        slidesToShow: 1,     // Number of slides to show at a time
        slidesToScroll: 1,   // Number of slides to scroll at a time
        autoplay: true,      // Enable autoplay
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1000

      };
    return (
        <div className='Banner'>
             <Slider {...settings}>
                <div>
            <div className="slider-item-text">
                <div className='slider-text text-white text-center mx-auto'>
                    <p className='sub-title  position-relative d-inline'>Welcome To Wooder</p>
                    <h1 className='my-4'>We give solution to
                    need your carpenter</h1>
                    <p>From 1984, we have worked tirelessly to earan our reputation for
                    quality and dependability in all wooden products we offer.</p>
                    <button className='Button mt-4'>Check Service</button>
                </div>
                </div>
            </div>
            <div className=''>
            <div className="slider-item-text">
                <div className='slider-text text-white text-center mx-auto'>
                    <p className='sub-title  position-relative d-inline'>Welcome To Wooder</p>
                    <h1 className='my-4'>Quality Wooden
                        On Your Demond</h1>
                    <p>From 1984, we have worked tirelessly to earan our reputation for
                        quality and dependability in all wooden products we offer.</p>
                    <button className='Button mt-4'>Check Service</button>
                </div>
                </div>
            </div>
            </Slider>
        </div>
    );
}

export default Banner;
