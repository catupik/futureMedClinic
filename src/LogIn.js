import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function LogIn() {
    const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login form submitted");
    setIsLoggedIn(true); // Set login status to true on successful login
    // Add login logic here
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("Registration form submitted");
    // Add registration logic here
  };

  const handleLogout = () => {
    console.log("Logout");
    setIsLoggedIn(false); // Set login status to false on logout
    // Add logout logic here, like clearing user data or tokens
  };

  return (
    <div className="auth-container">
      {isLoggedIn && (
        <div className="logout-container">
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {!isLoggedIn && (
        <div>
          <div className="auth-tab">
            <button className={`tab-button ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>Login</button>
            <button className={`tab-button ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>Sign Up</button>
          </div>
          <div className="auth-content">
            {isLogin ? (
              <LoginForm handleLogin={handleLogin} />
            ) : (
              <RegisterForm handleRegister={handleRegister} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
  
export default LogIn;
