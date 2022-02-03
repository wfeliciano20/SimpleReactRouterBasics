import React from 'react';
/*
  import useNavigate hook so later we can send the users to either the
  sign up page the login page or the home page
*/
import {useNavigate} from 'react-router-dom';
/*
  Import the useForm hook from the react-hook-form
  This will make available the hook that will provide
  the register component which will hold the state variables
  internally for each input and the handleSubmit 
  higherOrderComponent which will receive a custom function
  which will handle the logic we desire when the form is submitted
*/
import { useForm } from 'react-hook-form';
// Provides access to a yup resolver which will help with validation
import { yupResolver } from '@hookform/resolvers/yup';
/* 
  Yup will let us create a schema for how the form
  inputs need to be validated against.
*/
import * as yup from 'yup';
import Navbar from './Navbar';
import './LogIn.css';

/*
  Create the yup schema for form validation making the rule so that the
  email should be a valid string and is required. The password should be
  a string of at least 8 characters.
*/
const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
});

/*  
    This component receives seven props where two will be forwarded to 
    Navbar,currentUser to know if needs to show login or not or logout
    buttons and the setLoggedInUser function to reset the current logged
    in user to an empty object and simulating that there is no longer a
    logged in user when the user is clicks the logout button. 
    
    And the login function which will login a user.
*/

const LogIn = ({login, currentUser, setLoggedInUser}) => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(loginSchema)
  });
/* 
    When the form is submitted, we call the function login and if there 
    are no errors it will return true which will allow the user to be 
    logged in and redirect him to the home page
*/
  const handleSubmitForm = data => {
    if(login(data.email,data.password)) {
      navigate('/');
    }
  }



  return (
    <div>
      <Navbar currentUser={currentUser} setLoggedInUser={setLoggedInUser} />
      <div className="login-container">
        <div className="form-container">
                <form onSubmit={handleSubmit(handleSubmitForm)} className="form">
                  <label className="label" htmlFor="email">Email:</label>
                  <input className="input" type="email" name="email" { ...register('email') }  />
                  {errors?.email ? <p className="error">{errors.email.message}</p>:null}
                  <label className="label" htmlFor="password">Password:</label>
                  <input className="input" type="password" name="password" { ...register('password') }  />
                  {errors?.password ? <p className="error">{errors.password.message}</p>:null}
                  <input className="submit" type="submit" value="Log in" />
                </form>
        </div>
      </div>
    </div>
    
  );
};

export default LogIn;


/*
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
*/