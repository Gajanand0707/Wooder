import React from 'react';
import Logo from '../assests/images/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <div className="navbar-brand" ><img src={Logo} alt='Navbar' style={{width:"140px"}} /></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav gap-4 ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <div className='buttons'><button className='navbtn'>Appointment</button></div>
      
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
