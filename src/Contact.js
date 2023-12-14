import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
// eslint-disable-next-line no-unused-vars
  const [submissionMessage, setSubmissionMessage] = useState(''); // State for submission message
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Here, you would typically send formData to the server
      console.log(formData);

      // Simulating a successful submission
      alert("Thank you! Your message has been sent.");

      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // Handle any errors that occur during submission
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Contact us</h2>
      <h1>FutureMed Clinic</h1>
      <p>
        At FutureMed Clinic, we are always ready to assist you with any health
        inquiries or medical service needs. Feel free to reach out to us; we are
        here to support you.
      </p>

      <div>
        <h4>Address:</h4>
        <p>
          123 Wellness Avenue,
          <br />
          Springfield, SP 12345,
          <br />
          United States
        </p>
      </div>

      <div>
        <h4>Phone</h4>
        <h3>+1 (555) 123-4567</h3>
      </div>

      <div>
        <h4>Email:</h4>
        <p>contact@futuremedclinic.com</p>
      </div>

      <div>
        <h4>Business Hours:</h4>
        <p>
          Monday - Friday: 9:00 AM - 6:00 PM <br />
          Saturday: 10:00 AM - 2:00 PM <br />
          Sunday: Closed
        </p>
      </div>

      <div>
        <h3>Online Appointment Booking</h3>
        <p>
          For your convenience, we offer the option to book appointments online.
          Simply click the button below to select a suitable time and service.
        </p>

        <button>[Online Appointment Booking Button]</button>
      </div>

      <div>
        <h3>Feedback</h3>
        <p>
          We value your feedback and are always looking to improve our services.
          If you have any suggestions or comments, please fill out our feedback
          form or write to us at our email address.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
