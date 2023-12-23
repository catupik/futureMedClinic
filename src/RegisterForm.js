import { useEffect, useRef, useState } from "react";

function RegisterForm({ setPassword, handleRegister, setConfirmPassword }) {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);


  useEffect(()=>{
    generateRandomPassword();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const generateRandomPassword = async () => {
    const length = '16';
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/passwordgenerator?length=' + length, {
        method: 'GET',
        headers: { 'X-Api-Key': 'bHSC6+lSUfRd3nP1i1MC3Q==hNb529z22USsE247', 'Content-Type': 'application/json' }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const randomPassword = data.password;
      passwordRef.current.value = randomPassword;
      confirmPasswordRef.current.value = randomPassword;
      setPassword(randomPassword);
      setConfirmPassword(randomPassword);
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          ref={confirmPasswordRef}
        />
      </div>
      <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
      <button type="button" onClick={generateRandomPassword}>Generate Password</button>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
