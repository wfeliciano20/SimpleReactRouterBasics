import React from 'react';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = ({currentUser}) => {
  return (
    <div>
      <Navbar currentUser={currentUser} />
      {currentUser.email ? <h1>Welcome {currentUser.email}</h1> : null}
      <main className="hero">
        <div className="hero-text">
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elite.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="hero-img">
          <div className="img-placeholder"></div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
