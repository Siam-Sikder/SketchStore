import React, { useState } from 'react';
import './nav.css';

const goHome = () => {
  document.querySelector('.home').scrollIntoView({ behavior: 'smooth' })
}

const goFeatures = () => {
  document.querySelector('.features').scrollIntoView({ behavior: 'smooth' })
}

const goScreenshots = () => {
  document.querySelector('.screenshots').scrollIntoView({ behavior: 'smooth' })
}

const goPricing = () => {
  document.querySelector('.pricing').scrollIntoView({ behavior: 'smooth' })
}

const goContact = () => {
  document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' })
}



const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='nav'>
        <h1 style={{ marginTop: '15px' }}>
          <span>SketchStore</span>
        </h1>
        <ul className='ulContainer'>
          <li onClick={goHome}>Home</li>
          <li onClick={goFeatures}>Features</li>
          <li onClick={goScreenshots}>screenshots</li>
          <li onClick={goPricing}>pricing</li>
          <li onClick={goContact}>contact</li>
        </ul>

        {!isMenuOpen ? (
          <ion-icon className='m1 m' onClick={toggleMenu} name="menu-outline"></ion-icon>
        ) : (
          <ion-icon className='m2 m' onClick={toggleMenu} name="close-outline"></ion-icon>
        )}
      </div>

      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li onClick={goHome}>Home</li>
            <li onClick={goFeatures}>Features</li>
            <li onClick={goScreenshots}>screenshots</li>
            <li onClick={goPricing}>pricing</li>
            <li onClick={goContact}>contact</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;
