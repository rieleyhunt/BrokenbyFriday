import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import bbfLogo from './assets/bbf.svg';
import bbfWrittenLogo from './assets/bbfwritten.png'
import Concert1 from './assets/Concert1.jpg';
import Concert2 from './assets/Concert2.jpg';
import Concert3 from './assets/Concert3.jpg';
import Concert4 from './assets/Concert4.jpg';
import './App.css';

const App: React.FC = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      const node = headingRef.current;
      if (!node) return;
    
      const observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0.2 }
      );
    
      observer.observe(node);
    
      return () => {
        observer.unobserve(node);
      };
    }, []);

  return (
    <div className="app-container">
      {/*Add the logo*/}
      <div className="top-bar">
        <img src={bbfWrittenLogo} alt="BBF Logo" className="bbfWrittenLogo" />

        <div className="button-container">
            <Link to="/"><button className="button">Home</button></Link>
            <Link to="/upcoming"><button className="button">Upcoming</button></Link>
            <Link to="/gallery"><button className="button">Gallery</button></Link>
            <Link to="/booking"><button className="button">Booking</button></Link>
        </div>
      </div>
      <div className="logo-container">
        <img src={Concert1} alt= "Concert1" className = "concert1" />
        <img src={bbfLogo} alt = "Broken By Friday Logo" className = "logo" />
      </div>
      <div className="main-page">
        {/*Add the band name and description */}
        <h1 ref={headingRef} className={`we-are-broken-by-friday ${inView ? 'animate' : ''}`}>We are Broken By Friday...</h1>
        <p ref={headingRef} className={`ottawa-pop-punk ${inView ? 'animate' : ''}`}>Ottawa’s up and coming pop punk sensation</p>
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