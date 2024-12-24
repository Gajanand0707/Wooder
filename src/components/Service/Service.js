import React from 'react';
import './Service.css'
import ServiceImage from '../../assests/images/service-1.jpg'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Service = () => {
    const settings = {
        dots: false,          
        infinite: true,     
        speed: 500,          
        slidesToShow: 3,     
        slidesToScroll: 1,  
        autoplay: true,      
        autoplaySpeed: 5000,
        pauseOnHover: true,
        pauseOnFocus: false,
        speed: 1000,
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
              },
            },
          ],
        
      };
    return (
        <section className='Service'>
            <div className='container'>
                <div className='row mb-5 align-items-center'>
                    <div className='col-md-6'>
                        <h2 className='linesingle mb-3'>Our Services</h2>
                        <p>What We Provide For You check now and deside it
                            do you want now this</p>
                    </div>
                    <div className='col-md-6 text-end'>
                        <button className='Button'>All Services</button>
                    </div>
                </div>
                <Slider {...settings}>
                <div className=''>
                    <div className='Service-item text-center'>
                       <div className='image_Service'> <img src={ServiceImage} className='w-100 rounded ' alt='ServiceImagg' /></div>
                        <h3 className='mt-4'>Furniture Remodeling</h3>
                        <p className='my-3'>Professionals work with a variety of all materials, in a variety of settings–indoor and outdoor.</p>
                        <a href='#'>Read More</a>
                    </div>
                </div>
                <div className=''>
                    <div className='Service-item text-center'>
                    <div className='image_Service'>  <img src={ServiceImage} className='w-100 rounded' alt='ServiceImagg' /></div>
                        <h3 className='mt-4'>Furniture Remodeling</h3>
                        <p className='my-3'>Professionals work with a variety of all materials, in a variety of settings–indoor and outdoor.</p>
                        <a href='#'>Read More</a>
                    </div>
                </div>
                <div className=''>
                    <div className='Service-item text-center'>
                    <div className='image_Service'>     <img src={ServiceImage} className='w-100 rounded' alt='ServiceImagg' /></div>
                        <h3 className='mt-4'>Furniture Remodeling</h3>
                        <p className='my-3'>Professionals work with a variety of all materials, in a variety of settings–indoor and outdoor.</p>
                        <a href='#'>Read More</a>
                    </div>
                </div>
                <div className=''>
                    <div className='Service-item text-center'>
                    <div className='image_Service'>      <img src={ServiceImage} className='w-100 rounded' alt='ServiceImagg' /></div>
                        <h3 className='mt-4'>Furniture Remodeling</h3>
                        <p className='my-3'>Professionals work with a variety of all materials, in a variety of settings–indoor and outdoor.</p>
                        <a href='#'>Read More</a>
                    </div>
                </div>
                </Slider>
            </div>
        </section>
    );
}

export default Service;
