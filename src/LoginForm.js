import { useEffect, useState } from "react";

function LoginForm({ handleLogin, userName, password }) {
  const[username, setUsername] = useState(userName)
  const [userPassword, setUserPassword] = useState(password);

  useEffect(()=>{
    setUsername(userName);
    setUserPassword(password);
  }, [userName, password])

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Welcome Back to FutureMed Clinic!</h2>
      <p>
        We're glad to see you again. Log in to your account to resume your
        personalized health experience.
      </p>
      <div className="input-login">
        <input type="text" placeholder="Username" value={username || ''} required />
        <input type="password" placeholder="Password" value={userPassword || ''} required />
        {/* eslint-disable-next-line */}
        <a className="forgot" href="">
          Forgot password?
        </a>
      </div>
      
        <button type="submit">Login</button>
     
    </form>
  );
}

export default LoginForm;
