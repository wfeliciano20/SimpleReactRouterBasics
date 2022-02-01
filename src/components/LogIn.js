import React from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import './LogIn.css';

const LogIn = ({login, email, password,setEmail, setPassword, currentUser, setLoggedInUser}) => {
  const navigate = useNavigate();
 
  const handleSubmit = e => {
    e.preventDefault();
    if(login(email,password)) {
      navigate('/');
    }
  }

  return (
    <div>
      <Navbar currentUser={currentUser} setLoggedInUser={setLoggedInUser} />
      <div className="login-container">
        <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                  <label className="label" htmlFor="email">Email:</label>
                  <input className="input" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  />
                  <label className="label" htmlFor="password">Password:</label>
                  <input className="input" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}  />
                  <input className="submit" type="submit" value="Log in" />
                </form>
        </div>
      </div>
    </div>
    
  );
};

export default LogIn;
