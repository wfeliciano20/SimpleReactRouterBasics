import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import About from './components/About';
import './App.css';

function App() {

  /* 
    set all the state variables in this component so that all of the child components get access to it.
    I use this approach so that the state is simple and to be able to not use a state management library.
    The users state will hold each individual user saving each users email as its key and storing both
    the key and the password so that later on it can be compare to login a user.
  */
  const [users, setUsers] = useState({
    'william.feliciano2@gmail.com': {
      email: 'william.feliciano2@gmail.com',
      password: '12345678'
    }
  });

  /*
    This variable will hold a logged in user which can only be one at a time.
  */
  const [loggedInUser, setLoggedInUser] = useState({});

  /*
    since the state is in app and this method has access to it we are going to make sure
    this function implements the logic to log in a user by first checking if the user email
    is in the users state variable. and then checking if the password that is stored in users
    equals the password passed to this function as a parameter. If this is the case then we 
    proceed to setLoggedInUser the current user equal to the user stored in users with the email
    as its key.If we complete this process successfully we will return true, otherwise we will 
    return false
  */
  const handleLogIn = (eml, pass) => {

    if (users[eml].email === eml){
      const user = users[eml];
      if(user.password === pass){
        setLoggedInUser(user);
        return true;
      }else{
        alert('You have entered a wrong password')
      }
    }
    else{
      alert('The email you entered is not registered');
    }
    return false;
  }

  /*
    This function implements the logic to Sign up a user by making sure the user pass an
    email, a password and confirmPassword, if both passwords match to then add the user 
    to the users state variable and set the logged in user as this new user. If we complete 
    this process successfully we will return true, otherwise we will return false
  */

  const handleSignUp = (email, pass, confirmPass) => {
      if(pass === confirmPass){
        setUsers(prevState => {
          return {
          ...prevState,
          [email]: { email,password: pass}
          }
        });
        setLoggedInUser({email,password: pass});
        // navigate('/profile');
        return true;
      }

      return false;
  }

  return (
    <div className="App">
      {/* set up the react-router Browser and Routes components and then add each individual Route */}
      <BrowserRouter>
        <Routes>
        {/* The Route with path '/' represents the route that will display the HomePage component, since
            we need to provide Navbar with the current user and a way to reset that logged in user we pass
            down the appropriate props 
        */}
          <Route path="/" element={<HomePage currentUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
          {/*
            The Route with path '/login' represents the route that will display the Login component,
            since this component has within it the Navbar component it needs the currentUser to determine
            if it should display the login or logout buttons and needs the setLoggedInUser to reset the
            LoggedInUser to an empty object once the logout button is clicked we pass those props along
            with the login function that will login an user. 
           */}
          <Route path="/login" element={<LogIn login={handleLogIn} currentUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
          {/*
            The Route with path '/signup' represents the route that will display the SignUp component,
            since this component has within it the Navbar component it needs the currentUser to determine
            if it should display the login or logout buttons and needs the setLoggedInUser to reset the
            LoggedInUser to an empty object once the logout button is clicked we pass those props along
            with the sigup function that will register and login an user. 
          */}
          <Route path='/signup' element={<SignUp signup={handleSignUp} currentUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
          {/*
            The Route with path '/about' represents the route that will display the About component,
            since this component has within it the Navbar component needs the currentUser to determine
            if it should display the login or logout buttons and needs the setLoggedInUser to reset the
            LoggedInUser to an empty object once the logout button is clicked we pass those props.
          */}
          <Route path='/about' element={<About currentUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
