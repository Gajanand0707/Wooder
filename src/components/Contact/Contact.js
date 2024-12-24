import React from 'react';
import Contactimage from '../../assests/images/slider-image-01.jpg'
import './Contact.css'
const Contact = () => {
    return (
        <section className='Contact'>
            <div className='container'>
                <div className='row mb-5 align-items-center'>
                    <div className='col-md-6'>
                        <h2 className='linesingle mb-3'>Contact Us</h2>
                        <p>What We Provide For You check now and deside it
                            do you want now this</p>
                    </div>

                </div>
                <div className='Contact-form'>
                    <div className='row align-items-stretch'>
                        <div className='col-md-6'>
                            <div className='contact-image h-100'>
                                <img src={Contactimage} className='h-100' alt='Contactimage' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <form className='form text-white'>
                                <label className='mt-0'>Name</label>
                                <input type='text' name='name' />
                                <label>Email</label>
                                <input type='email' name='email' />
                                <label>Massage</label>
                                <textarea rows={5}  />
                                <button type='submit' className='navbtn'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
