import { useRef, useState } from "react";

function RegisterForm({ setPassword, handleRegister, setConfirmPassword, onSuccessfulRegistration}) {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [generatedPassword, setGeneratedPassword] = useState('');

  const clearForm = () => {
    // Resetting state
    setGeneratedPassword('');
    setPassword('');
    setConfirmPassword('');

    // Resetting form fields
    usernameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    confirmPasswordRef.current.value = '';
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
       const randomPassword = data.random_password
      console.log(randomPassword)
      setGeneratedPassword(randomPassword);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegisterLocal =  (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      alert("Passwords do not match");
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
      setPassword("");
      setConfirmPassword("");
    } else {
      handleRegister(e);
      onSuccessfulRegistration(usernameRef.current.value, passwordRef.current.value)
      clearForm();
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
        <input type="text" placeholder="Username" required 
        ref={usernameRef}/>
        <input type="email" placeholder="Email" required 
        ref={emailRef}/>
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
      <button type="button" onClick={generateRandomPassword}>Generate Random Password</button>
      {generatedPassword && (
        <div>
          <strong>Generated Password:</strong> {generatedPassword}
        </div>
      )}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
