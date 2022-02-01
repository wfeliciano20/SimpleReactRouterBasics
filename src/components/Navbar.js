import React from 'react';
// import FaSearch icon 
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({currentUser, setLoggedInUser}) => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  }

  const handleLogin = () => {
    navigate('/login');
  }

  const handleLogOut = () => {
    console.log(typeof setLoggedInUser)
    console.log('log out');
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
