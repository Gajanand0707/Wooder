import React from 'react';
import './Footer.css'
import { TiSocialDribbble, TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import Logo from '../assests/images/logo.png'
const Footer = () => {
    return (
        <div className='main-footer'>
        <div className='Footer text-center'>
            <img src={Logo} alt='Logo' />
            <p className='my-3 text-white'>What We Provide For You check now and deside it
            do you want now this</p>
            <div className='icons'>
                <div className='icon'>   <TiSocialTwitter /></div>
         
                <div className='icon'>          <SlSocialInstagram /></div>
                <div className='icon'>      <TiSocialFacebook /></div>
                <div className='icon'>       <TiSocialDribbble /></div>
            </div>
        </div>
        </div>
    );
}

export default Footer;
