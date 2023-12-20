function RegisterForm({ setPassword, handleRegister, setConfirmPassword }) {
  return (
    <form className="login-form" onSubmit={handleRegister}>
      <h2>Welcome to FutureMed Clinic!</h2>
      <p>
        Join us in pioneering a healthier tomorrow. Registration is simple –
        just fill in your details.
      </p>
      <div className="input-register">
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required 
      onChange={(e)=> setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" required 
      onChange={(e)=> setConfirmPassword(e.target.value)}/>
      </div>
     
      <button type="submit">Register</button>
      
    </form>
  );
}

export default RegisterForm;
