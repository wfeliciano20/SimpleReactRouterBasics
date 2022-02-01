import React from 'react';
/*
  import useNavigate hook so later we can send the users to either the
  sign up page the login page or the home page
*/
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import './SignUp.css';

/*  
    This component receives nine props where two will be forwarded to 
    Navbar,currentUser to know if needs to show login or not or logout
    buttons and the setLoggedInUser function to reset the current logged
    in user to an empty object and simulating that there is no longer a
    logged in user when the user is clicks the logout button. 
    
    The remaining seven props are the signup function which will sign up 
    and login a user and the six remaining props are both the state for 
    each input and the functions to change them when the onChange event
    is fired.
*/

const SignUp = ({ signup,email,password,confirmPassword, setEmail, setPassword, setConfirmPassword, currentUser, setLoggedInUser}) => {
  const navigate = useNavigate();

  
/* 
    When the form is submitted, we call the function signup and if there 
    are no errors it will return true which will allow the user to be signed
    redirect to the home page
*/
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
