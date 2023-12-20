import { useState } from "react";
import { data } from "./data";
import { useNavigate } from 'react-router-dom';

function Team() {
  const [doctor, setDoctor] = useState(0);
  const { name, position, about, image } = data[doctor];

  const navigate = useNavigate();

  const previousDoctor = () => {
    setDoctor((doctor) => {
      doctor--;
      if (doctor<0){
        return data.length-1;
      }
      return doctor;
    });
  };

  const nextDoctor = () => {
    setDoctor((doctor) => {
      doctor++;
      if (doctor > data.length - 1) {
        doctor = 0;
      }
      return doctor;
    });
  };
  return (
    <div>

        <div className="nav-nav">
          {/* eslint-disable-next-line */}
            <a href="#" onClick={()=> navigate('/')}>Home/  </a>
            <p >Team</p>
          </div>
      <h1>Welcome to FutureMed Clinic</h1>
      <p>
        As the founding doctors of FutureMed Clinic, we are thrilled to welcome
        you to our medical facility, where innovation meets compassionate care.
        We, three young and dedicated doctors, embarked on this journey with a
        shared vision of revolutionizing healthcare delivery. Our commitment to
        excellence and patient-centered care is the foundation upon which
        FutureMed Clinic was built. From our early days as medical students to
        becoming seasoned professionals, we have always believed in the power of
        advanced medical practices combined with a personalized approach to
        treatment. Our clinic represents not just our professional aspirations
        but also our personal commitment to improving the lives of our patients.
        At FutureMed Clinic, we are more than just healthcare providers; we are
        your partners in health, dedicated to ensuring that every patient
        receives the best possible care in a state-of-the-art environment. Thank
        you for entrusting us with your health and well-being. Warm regards,
        [Your Names, Titles, and Qualifications]
      </p>

      <img
        src="https://images.pexels.com/photos/5452242/pexels-photo-5452242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="team"
        width="100%"
      />

      <div>
        <h2>Our Team</h2>
        <h3>{name}</h3>
        <h4>{position}</h4>
        <div>
          <button onClick={previousDoctor}>previous</button>
          <img src={image} alt="dr" height="400px" />
          <button onClick={nextDoctor}>next</button>
        </div>
        <h4>{about}</h4>
      </div>
    </div>
  );
}

export default Team;
