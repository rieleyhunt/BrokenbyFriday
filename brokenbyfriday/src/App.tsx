import React from 'react';
import bbfLogo from './assets/bbf.png';
import Concert1 from './assets/Concert1.jpg';
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
        <p className="broken-by-friday">Broken By Friday ©</p>
      </div>
    </div>
  );
};

export default App;