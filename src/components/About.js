import React from 'react';
import Navbar from './Navbar';
import './About.css';

/*  
    This component receives two props which will be forwarded to Navbar,
    currentUser to know if needs to show login or not or logout buttons 
    and the setLoggedInUser function to reset the current logged in user
    to an inactive empty object and simulating that there is no longer a
    logged in user when the user is clicks the logout button.
*/
const About = ({currentUser, setLoggedInUser}) => {
  return (
    <div>
      <Navbar currentUser={currentUser} setLoggedInUser={setLoggedInUser} />
      {/* If the user is logged in the page will show an h1 welcoming the user with its email*/}
      {currentUser.email ? <h1>Welcome {currentUser.email}</h1> : null}
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
