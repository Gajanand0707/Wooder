import React from 'react';
import './Projects.css'
import galleryImage1 from '../../assests/images/images-gallery1.jpg'
import galleryImage2 from '../../assests/images/images-gallery2.jpg'
const Projects = () => {
    return (
        <section className='Projects'>
            <div className='container'>
                <div className='Projects_text text-center'>
                    <h2 className='towlines linesingle'>Latest Projects</h2>
                    <p className='mx-auto mt-4'>Always honest rules of cooperation
                        We Follow them</p>
                </div>
                <div className='main-Projects'>
                    <div className='images-gallery'>
                        <div className='row align-items-stretch'>
                            <div className='col-md-3'>
                                <div className='images-gallery-box h-100'>
                                    <img src={galleryImage1} className='rounded h-100' alt='galleryImage1' />
                                    <div className='hover-text'>
                                        <h3>Wooden Godown</h3>
                                    </div>
                                </div>
</div>
                                <div className='col-md-6'>
                                    <div className='images-gallery-box mb-4'>
                                        <img src={galleryImage2} className='rounded ' alt='galleryImage1' />
                                        <div className='hover-text'>
                                        <h3>Wooden Godown</h3>
                                    </div>
                                        </div>
                                        <div className='images-gallery-box'>
                                        <img src={galleryImage2} className='rounded' alt='galleryImage1' />
                                        <div className='hover-text'>
                                        <h3>Wooden Godown</h3>
                                    </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='images-gallery-box h-100'>
                                        <img src={galleryImage1} className='rounded h-100' alt='galleryImage1' />
                                        <div className='hover-text'>
                                        <h3>Wooden Godown</h3>
                                    </div>
                                    </div>
                                </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
