import React from 'react';
import bbfLogo from './assets/bbf.png';
import Concert1 from './assets/Concert1.jpg';
import Concert2 from './assets/Concert2.jpg';
import Concert3 from './assets/Concert3.jpg';
import Concert4 from './assets/Concert4.jpg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/*Add the logo*/}
      <div className="logo-container">
        <img src={Concert1} alt= "Concert1" className = "concert1" />
        <img src={bbfLogo} alt = "Broken By Friday Logo" className = "logo" />
      </div>
      <div className="buttons-container">
          <button type="button" className="button">Home</button>
          <button type="button" className="button">Upcoming</button>
          <button type="button" className="button">Gallery</button>
          <button type="button" className="button">Booking</button>
      </div>
      <div className="main-page">
        {/*Add the band name and description */}
        <h1 className="we-are-broken-by-friday">We are Broken By Friday...</h1>
        <p className="ottawa-pop-punk">Ottawa’s up and coming pop punk sensation</p>
        <div className="display-photos">
          <img src={Concert2} alt="Concert2" className="concert2" />
          <img src={Concert3} alt="Concert3" className="concert3" />
          <img src={Concert4} alt="Concert4" className="concert4" />
        </div>
      </div>
      <div className="footer">
        <p className="footer-text">© 2024 Broken By Friday. All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;