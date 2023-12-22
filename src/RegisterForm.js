import { useRef } from "react";

function RegisterForm({ setPassword, handleRegister, setConfirmPassword }) {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleRegisterLocal = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      alert("Passwords do not match");
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
      setPassword("");
      setConfirmPassword("");
    } else {
      handleRegister(e);
    }
  };

  return (
    <form className="login-form" onSubmit={handleRegisterLocal}>
      <h2>Welcome to FutureMed Clinic!</h2>
      <p>
        Join us in pioneering a healthier tomorrow. Registration is simple –
        just fill in your details.
      </p>
      <div className="input-register">
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          ref={confirmPasswordRef}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
