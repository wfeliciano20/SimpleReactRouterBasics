import React from 'react';
import Navbar from './Navbar';
import './About.css';

const About = ({currentUser, setLoggedInUser}) => {
  return (
    <div>
      <Navbar currentUser={currentUser} setLoggedInUser={setLoggedInUser} />
      <div className="container">
        <div className="content">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur expedita alias quis, officiis fugit voluptas itaque dicta beatae, nulla in totam enim neque accusamus dolorum! Pariatur, error id? Ex?</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
