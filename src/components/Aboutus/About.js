import React from 'react';
import './About.css'
import Aboutimage from '../../assests/images/about-us.jpg'
import  Imagebg from  '../../assests/images/pattern.png'
const About = () => {
    return (
        <section className='About'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                    <h2 className='linesingle'>About Us</h2>
                    <div className='years'>
                        <h3 className='m-0'><b>35</b> Years Of Experience</h3>
                    </div>
                    <p className='body-text'>Our commitment to bring professionalism, good service & trust to the home repair service & maintenance business. We take immense pride in sending some of the most of professional handymen to yours homes to fix things that aren't workings.</p>
                   <ul>
                    <li>Quis nostrud exer citation. </li>
                    <li>Exercitation ullamco laboris nis.</li>
                    <li>Commodo consequat duis autex.</li>
                   </ul>
                   <button className='navbtn'>Read More</button>
                    </div>
                    <div className='col-md-6'>
                        <div className='About-image'>
                        <img src={Aboutimage} alt='image' />
                        <img src={ Imagebg } alt='image' className='bg-about' />
                        </div>
                     </div>
                </div>
               
            </div>
        </section>
    );
}

export default About;
