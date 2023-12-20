function LoginForm({ handleLogin }) {
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Welcome Back to FutureMed Clinic!</h2>
      <p>
        We're glad to see you again. Log in to your account to resume your
        personalized health experience.
      </p>
      <div className="input-login">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
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
