import React from 'react';
import './Expertworker.css'
import Team1 from '../../assests/images/team-1.jpg'
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialDribbble } from "react-icons/ti";

const Expertworker = () => {
    return (
        <section className="Expertworker">
            <div className='container'>
                <div className='Projects_text text-center'>
                    <h2 className='towlines linesingle'>Expert Worker</h2>
                    <p className='mx-auto mt-4'>We have Expert Worker They provide Quality Work For Customer</p>
                </div>
                <div className='row'>
                    <div className='col-md-4 team-member'>
                        <img src={Team1} alt='</div>' />
                        <div className='team-text'>
                            <h4>Tiny Moleski</h4>
                            <p className=''>Project Manager</p>
                            <div className='social-media-icon align-items-center justify-content-center d-flex gap-3'>
                                <TiSocialTwitter />
                                <SlSocialInstagram />
                                <TiSocialFacebook />
                                <TiSocialDribbble />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 team-member'>
                        <img src={Team1} alt='</div>' />
                        <div className='team-text'>
                            <h4>Tiny Moleski</h4>
                            <p className=''>Project Manager</p>
                            <div className='social-media-icon align-items-center justify-content-center d-flex gap-3'>
                                <TiSocialTwitter />
                                <SlSocialInstagram />
                                <TiSocialFacebook />
                                <TiSocialDribbble />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 team-member'>
                        <img src={Team1} alt='</div>' />
                        <div className='team-text'>
                            <h4>Tiny Moleski</h4>
                            <p className=''>Project Manager</p>
                            <div className='social-media-icon align-items-center justify-content-center d-flex gap-3'>
                                <TiSocialTwitter />
                                <SlSocialInstagram />
                                <TiSocialFacebook />
                                <TiSocialDribbble />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Expertworker;
