import React from 'react';
import { Link } from 'react-router-dom';
import bbfWrittenLogo from './assets/bbfwritten.png'
import './Gallery.css';

const Gallery: React.FC = () => {
    return (
        <div className="app-container">
            <div className="top-bar">
                <img src={bbfWrittenLogo} alt="BBF Logo" className="bbfWrittenLogo" />
                <div className="button-container">
                    <Link to="/"><button className="button">Home</button></Link>
                    <Link to="/upcoming"><button className="button">Upcoming</button></Link>
                    <Link to="/gallery"><button className="button">Gallery</button></Link>
                    <Link to="/booking"><button className="button">Booking</button></Link>
                </div>
            </div>
            <div className="gallery-page">
                <h1>Gallery</h1>
                <p>Photos from past shows will go here.</p>
            </div>
        </div>
    );
};
  
export default Gallery;