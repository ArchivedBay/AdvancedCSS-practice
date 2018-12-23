import React from 'react';
import Button from './Button';

import '../styles/components/_Header.scss'

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="/images/logo-white.png" alt="Logo" className='header__logo' />
      </div>

      <div className="cta-container">
        <h1 className="heading-primary">
          <span className="heading-primary--top">{ props.topText }</span>
          <span className="heading-primary--bottom">{ props.bottomText }</span>
        </h1>
        
        <Button link='#' text='Discover The Outdoors' />
      </div>
      
    </header>
  );
}

export default Header;