import React from 'react';
import bbfLogo from './assets/bbf.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/*Add the logo*/}
      <img src={bbfLogo} alt = "Broken By Friday Logo" className = "logo" />
      {/*Add the band name and description*/}
      <h1 className="we-are-broken-by-friday">We are Broken By Friday...</h1>
      <p className="ottawa-pop-punk">Ottawa’s up and coming pop punk sensation</p>
      <p className="broken-by-friday">Broken By Friday ©</p>
      <p className="upcoming">Upcoming</p>
      <p className="gallery">Gallery</p>
      <p className="booking">Booking</p>
      <p className="home">Home</p>
    </div>
  );
};

export default App;