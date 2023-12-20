function RegisterForm({ handleRegister }) {
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
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
