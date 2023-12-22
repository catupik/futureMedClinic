import {  useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useNavigate } from 'react-router-dom';

function LogIn() {

    const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login form submitted");
    setIsLoggedIn(true); // Set login status to true on successful login
    // Add login logic here
  };

  const handleRegister = (event) => {
    event.preventDefault();
    
    if (password === confirmPassword){
      console.log(password, confirmPassword)
      alert("Registration form submitted");

    // Add registration logic here
     
    }else{
      console.log(password, confirmPassword)
      alert('Passwords do not match')
      
      setPassword('');
      setConfirmPassword('')
      
      
    }

    
  };

  const handleLogout = () => {
    console.log("Logout");
    setIsLoggedIn(false); // Set login status to false on logout
    // Add logout logic here, like clearing user data or tokens
  };

  const navigate = useNavigate();


  return (
    <div className="auth-container">
      {isLoggedIn && (
        <div className="logout-container">
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {!isLoggedIn && (
        <div>
          <div className="nav-nav">
            {/* eslint-disable-next-line */}
            <a href="#" onClick={()=> navigate('/')}>Home/  </a>
            <p >Log in/Sign up</p>
          </div>
          <div className="auth-tab">
          
          
            <button className={`tab-button ${isLogin ? 'active-btn' : ''}`} onClick={() => setIsLogin(true)}>Login</button>
            <button className={`tab-button ${!isLogin ? 'active-btn' : ''}`} onClick={() => setIsLogin(false)}>Sign Up</button>
          </div>
          <div className="auth-content">
            {isLogin ? (
              <LoginForm handleLogin={handleLogin} />
            ) : (
              <RegisterForm setPassword={setPassword} setConfirmPassword={setConfirmPassword} handleRegister={handleRegister} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
  
export default LogIn;
