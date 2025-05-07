import React from 'react';
import { Link } from 'react-router-dom';
import bbfLogo from './assets/bbf.svg';
import Concert1 from './assets/Concert1.jpg';
import './Booking.css';

const Booking: React.FC = () => {
    return (
    <div className="app-container">
      {/*Add the logo*/}
      <div className="logo-container">
        <img src={Concert1} alt= "Concert1" className = "concert1" />
        <img src={bbfLogo} alt = "Broken By Friday Logo" className = "logo" />
      </div>
      <div className="buttons-container">
        <Link to="/"><button type="button" className="button">Home</button></Link>
        <Link to="/upcoming"><button type="button" className="button">Upcoming</button></Link>
        <Link to="/gallery"><button type="button" className="button">Gallery</button></Link>
        <Link to="/booking"><button type="button" className="button">Booking</button></Link>
      </div>
    </div>
    // TODO - Implement a forum which users can submit a booking inquiry
    );
  };
  
export default Booking;