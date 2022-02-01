import React from 'react';
// import FaSearch icon 
import {FaSearch} from 'react-icons/fa';
/* import useNavigate hook so later we can send the users to either the sign up page the login page or the home
  page
  import Link to be able to have the Home and about links redirect to the correct pages
*/ 
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';


/*  Receives two props the currentUser which is the currentLoggedInUser if there is one, and a way to reset the
    currentLoggedInUser if the logout button is clicked
*/
const Navbar = ({currentUser, setLoggedInUser}) => {
  const navigate = useNavigate();

  // Redirects the user to the sign up page if the user clicks the sign up button.
  const handleSignup = () => {
    navigate('/signup');
  }

  // Redirects the user to the login page if the user clicks the login button.
  const handleLogin = () => {
    navigate('/login');
  }

  // Resets the current logged in user and redirects to the home page when the user clicks the logout button.
  const handleLogOut = () => {
    setLoggedInUser({});
    navigate("/");
  }

  return <div className="navbar">
    <div className="links">
      <ul className='list'>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
      </ul>
    </div>
    <div className="logo">
      MailChimp
    </div>
    <div className="actions">
      <FaSearch className="search" />
      
      {!currentUser.email ? <button className="btn btn-full" onClick={handleSignup}>Sign Up</button>:null}
      {!currentUser.email ? <button className="btn btn-outline"onClick={handleLogin}>Log In</button>: null}
      {currentUser.email ? <button className="btn btn-full" onClick={handleLogOut}>Log Out</button>:null}
    </div>
  </div>;
};

export default Navbar;
