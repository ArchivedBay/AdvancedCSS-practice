import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div id="landing-page">
      <header className="header">
        <div className="logo-box">
          <img src="/images/logo-white.png" alt="Logo" className='logo' />
        </div>

        <div className="cta-container">
          <h1 className="heading-primary">
            <span className="heading-primary-top">Outdoors</span>
            <span className="heading-primary-bottom">It's where we are.</span>
          </h1>
        </div>
        
      </header>
    </div>
  );
}

export default LandingPage;