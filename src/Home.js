import { useNavigate } from "react-router-dom";
import horizontal from "./video-horizontal.mp4";
import vertical from "./video-vertical.mp4";

const Home = () => {
  const navigate = useNavigate();
  const handleAppointmentClick = (myLink) => () => {
    navigate(myLink);
  };

  return (
    <div>
      <div className="video-container">
        <video className="desktop-video" playsInline autoPlay muted loop>
          <source src={horizontal} type="video/mp4" />
        </video>
        <video className="mobile-video" playsInline autoPlay muted loop>
          <source src={vertical} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>

        <div className="video-title">
          <h1>Welcome to FutureMed Clinic</h1>
        </div>

        <div className="video-footer">
          <h3>Your Health and Well-being is Our Priority</h3>
        </div>
      </div>
      <div>
        <h4>
          At FutureMed Clinic, we combine cutting-edge medical technologies with
          the highest level of patient care to provide you with the best medical
          services.
        </h4>
      </div>
      <div>
        <h2>Our Services</h2>
        <ul>
          <li>
            Advanced Diagnostics: Utilizing the latest in diagnostic
            technologies for accurate and timely diagnosis.
          </li>
          <li>
            General and Specialized Medical Care: A broad range of medical
            services from general practice to specialized fields.
          </li>
          <li>
            Personalized Care: Tailored approach to each patient, based on the
            latest medical advancements and research.
          </li>
        </ul>

        <button onClick={handleAppointmentClick("/services")}>More info</button>
      </div>

      <div>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            Highly Qualified Professionals: Our team consists of experienced
            doctors and medical staff who continually upgrade their skills.
          </li>
          <li>
            Innovative Treatment Methods: We use state-of-the-art medical
            technologies and treatment techniques to ensure the best outcomes.
          </li>
          <li>
            Patient Care Focus: Our primary concern is your health and comfort
            during treatment and rehabilitation.
          </li>
        </ul>
        <button onClick={handleAppointmentClick("/team")}>Our Team</button>
      </div>

      <div>
        <h2>Patient Testimonials</h2>
      </div>

      <div>
        <h2>Contact us</h2>
        <p>Address: [Clinic Address]</p>
        <p>Phone: [Phone Number]</p>
        <p>Email: [Email Address]</p>
        <button onClick={handleAppointmentClick("/appointment")}>
          [Online Appointment Booking]
        </button>
      </div>
    </div>
  );
};

export default Home;
