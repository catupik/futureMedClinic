import { useState } from "react";

function LogIn() {
    const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track login status

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
  
  function LoginForm({ handleLogin }) {
    return (
      <form onSubmit={handleLogin}>
        <h2>Welcome Back to FutureMed Clinic!</h2>
        <p>We're glad to see you again. Log in to your account to resume your personalized health experience.</p>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    );
  }
  
  function RegisterForm({ handleRegister }) {
    return (
      <form onSubmit={handleRegister}>
        <h2>Welcome to FutureMed Clinic!</h2>
        <p>Join us in pioneering a healthier tomorrow. Registration is simple – just fill in your details.</p>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
    );
  }

export default LogIn;
