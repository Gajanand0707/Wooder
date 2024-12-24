import React from 'react';
import './Clientsays.css'
import Clientimage from '../../assests/images/testi-thumb.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Clientsays = () => {
    const settings = {
        dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
        {
          breakpoint: 768,  
          settings: {
            slidesToShow: 1, 
            slidesToScroll: 1,
            centerPadding: '0px',
            centerMode: true,
          },
        },
      ],

    };
    return (
        <section className='Clientsays'>
            <div className='container pb-4 '>
                <div className='Projects_text text-center'>
                    <h2 className='towlines linesingle'>What Clients Says </h2>
                    <p className='mx-auto mt-4'>You read our clients review
                        check this now</p>
                </div>
                <Slider {...settings}>
                    <div>
                        <div className='Client'>
                            <div className='client-bio d-flex align-items-center gap-3'>
                                <img src={Clientimage} alt='Client' />
                                <div className='client-name '>
                                    <h5>Jhon Zabrilla</h5>
                                    <p>Newyark City</p>
                                </div>
                            </div>
                            <p>Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house ever! It’s been a beautiful ride, there were up’s and down’s, frustrations, delays at the same time great looks. keep touch with them.</p>
                        </div>
                    </div>
                    <div>
                        <div className='Client'>
                            <div className='client-bio d-flex align-items-center gap-3'>
                                <img src={Clientimage} alt='Client' />
                                <div className='client-name '>
                                    <h5>Jhon Zabrilla</h5>
                                    <p>Newyark City</p>
                                </div>
                            </div>
                            <p>Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house ever! It’s been a beautiful ride, there were up’s and down’s, frustrations, delays at the same time great looks. keep touch with them.</p>
                        </div>
                    </div>
                    <div>
                        <div className='Client'>
                            <div className='client-bio d-flex align-items-center gap-3'>
                                <img src={Clientimage} alt='Client' />
                                <div className='client-name '>
                                    <h5>Jhon Zabrilla</h5>
                                    <p>Newyark City</p>
                                </div>
                            </div>
                            <p>Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house ever! It’s been a beautiful ride, there were up’s and down’s, frustrations, delays at the same time great looks. keep touch with them.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default Clientsays;
