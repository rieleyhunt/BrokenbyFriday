import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bbfLogo from './assets/bbf.svg';
import Concert1 from './assets/Concert1.jpg';
import './Upcoming.css';

type Concert = {
    _id?: string;
    title: string;
    date: string;
    location: string;
    photo: string;
}

const Upcoming: React.FC = () => {
    const [concerts, setConcerts] = useState<Concert[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/concerts')
            .then(res => res.json())
            .then(data => setConcerts(data))
            .catch(err => console.error('Error fetching concerts: ', err))
        }, []);     
    console.log(concerts.length)
  
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
      <div className="upcoming-page">
        <h1>Upcoming Shows</h1>
        <div className="concerts-grid">
            {concerts.map((concert) => (
            <div key={concert._id} className="concert-card">
                <img src={concert.photo} alt={concert.title} className="concert-img" />
                <h2>{concert.title}</h2>
                <p>{concert.date}</p>
                <p>{concert.location}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
    );
  };
  
export default Upcoming;