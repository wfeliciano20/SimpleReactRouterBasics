import React from 'react';
import Navbar from './Navbar';
import './HomePage.css';


/*  
    This component receives two props which will be forwarded to Navbar,
    currentUser to know if needs to show login or not or logout buttons 
    and the setLoggedInUser function to reset the current logged in user
    to an inactive empty object and simulating that there is no longer a
    logged in user when the user is clicks the logout button.
*/
const HomePage = ({currentUser, setLoggedInUser}) => {
  return (
    <div>
      <Navbar currentUser={currentUser}  setLoggedInUser={setLoggedInUser}/>
      {/* If the user is logged in the page will show an h1 welcoming the user with its email*/}
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
