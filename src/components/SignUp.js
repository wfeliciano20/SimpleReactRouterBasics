import React from 'react';
/*
  import useNavigate hook so later we can send the users to either the
  sign up page the login page or the home page
*/
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
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
import './SignUp.css';

/*
  Create the yup schema for form validation making the rule so that the
  email should be a valid string and is required. The password should be
  a string of at least 8 characters and a confirm password that should be
  the same as the password.
*/ 
const signupSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required()
});

/*  
    This component receives nine props where two will be forwarded to 
    Navbar,currentUser to know if needs to show login or not or logout
    buttons and the setLoggedInUser function to reset the current logged
    in user to an empty object and simulating that there is no longer a
    logged in user when the user is clicks the logout button. 
    
    And the signup function which will sign up 
    and login a user.
*/

const SignUp = ({ signup,currentUser, setLoggedInUser }) => {
    /* 
      Get the navigate object so that later on we can redirect the user back
      to the home page.
    */
    const navigate = useNavigate();
    /*
      Get the register object which will hold the state variables
      internally for each input and the handleSubmit higherOrderComponent 
      which will receive a custom function which will handle the logic we
      desire when the form is submitted and also the errors object which 
      will hold the messages for each error 
    */
    const { register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(signupSchema)
    })
  
/* 
    When the form is submitted, we call the function signup and if there 
    are no errors it will return true which will allow the user to be signed
    redirect to the home page
*/
  const handleSubmitForm = (d) => {
    
    if(signup(d.email, d.password, d.confirmPassword)){
      navigate('/');
    }
    else{
      alert('There is an error signing you up.');
    }
  }
  return (
    <div>
      <Navbar currentUser={currentUser} setLoggedInUser={setLoggedInUser} />
      <div className="signup-container">
        <div className="form-container">
          <form onSubmit={handleSubmit(handleSubmitForm)} className="form">
            <label className="label" htmlFor="email">Email:</label>
            <input className="input" type="email" name="email" {...register('email')}  />
            <label className="label" htmlFor="password">Password:</label>
            <input className="input" type="password" name="password" {...register('password')} />  
            <label className="label" htmlFor="confirmPassword">Confirm Password:</label>
            <input className="input" type="password" name="confirmPassword" {...register('confirmPassword')} />
            <input className="submit" type="submit" value="Sign up" />
          </form>
        </div>
      </div>
    </div>
    
    
  );
};

export default SignUp;
