import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import About from './components/About';
import './App.css';

function App() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [users, setUsers] = useState({
    'william.feliciano2@gmail.com': {
      email: 'william.feliciano2@gmail.com',
      password: '12345678'
    }
  });
  const [loggedInUser, setLoggedInUser] = useState({});


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
      alert('The email you entered is not registed');
      // navigate('/signup');
    }
    return false;
  }

  const handleSignUp = (email, pass, confirmPass) => {
    if(email.includes('@')) {
        setEmail(email);
      }else{
        alert('Please a valid email');
      }

      if(pass.length >= 8){
        setPassword(password);
      }else{
        alert('Please make your password at least 8 characters long');
      }

      if(confirmPass.length >= 8){
        setConfirmPassword(confirmPassword);
      }else{
        alert('Please make your password at least 8 characters long');
      }

      console.log(password,confirmPassword);
      if(password === confirmPassword){
        setUsers(prevState => {
          return {
          ...prevState,
          [email]: { email,password}
          }
        });
        setLoggedInUser({email,password});
        // navigate('/profile');
        return true;
      }

      return false;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage currentUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
          <Route path="/login" element={<LogIn login={handleLogIn} email={email} password={password} setEmail={setEmail} setPassword={setPassword} currentUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
          <Route path='/signup' element={<SignUp signup={handleSignUp} email={email} password={password} confirmPassword={confirmPassword} setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword} currentUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
          <Route path='/about' element={<About currentUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
