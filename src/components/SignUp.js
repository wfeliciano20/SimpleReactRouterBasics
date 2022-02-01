import React from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import './SignUp.css';

const SignUp = ({ signup,email,password,confirmPassword, setEmail, setPassword, setConfirmPassword, currentUser, setLoggedInUser}) => {
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(signup(email, password, confirmPassword)){
      navigate('/');
    }
    else{
      alert('There is an error');
    }
  }
  return (
    <div>
      <Navbar currentUser={currentUser} setLoggedInUser={setLoggedInUser} />
      <div className="signup-container">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <label className="label" htmlFor="email">Email:</label>
            <input className="input" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  />
            <label className="label" htmlFor="password">Password:</label>
            <input className="input" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}  />
            <label className="label" htmlFor="confirmPassword">Confirm Password:</label>
            <input className="input" type="password" name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <input className="submit" type="submit" value="Sign up" />
          </form>
        </div>
      </div>
    </div>
    
    
  );
};

export default SignUp;
