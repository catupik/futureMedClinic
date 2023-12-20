import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import DoctorSelector from "./DoctorSelector";
import ServiceSelector from "./ServiceSelector";

function Appointment({ doctors, clinicEmail, services }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [filteredServices, setFilteredServices] = useState([]);
  const [appointmentType, setAppointmentType] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [symptoms, setSymptoms] = useState({
    temperature: false,
    throatPain: false,
    backPain: false,
    highBloodPressure: false,
    headache: false,
    weakness: false,
    weightLoss: false,
    lossOfAppetite: false,
    enlargedLymphNodes: false,
    abdominalPain: false,
    bloating: false,
    diarrheaOrConstipation: false,
    visionImpairment: false,
    other: "",
  });
  const [symptomStartDate, setSymptomStartDate] = useState("");
  const [medicationsUsed, setMedicationsUsed] = useState("");
  const [medicationEffectiveness, setMedicationEffectiveness] = useState("");
  const [currentDiseases, setCurrentDiseases] = useState("");
  const [injuryDate, setInjuryDate] = useState("");
  const [allergies, setAllergies] = useState("");
  const [regularMedications, setRegularMedications] = useState("");

  const location = useLocation();
  const passedDoctor = location.state?.selectedDoctor;

  const navigate = useNavigate();

  useEffect(() => {
    if (passedDoctor) {
      setDoctorName(passedDoctor);
    }
  }, [passedDoctor]);

  useEffect(() => {
    if (selectedService) {
      // Find the service category that includes the selected service
      const serviceCategory = services.find((category) =>
        category.services.some(
          (service) => service.description === selectedService
        )
      );

      if (serviceCategory) {
        // Filter doctors based on the selected service
        const relatedDoctors = doctors.filter((doctor) =>
          serviceCategory.doctors.includes(doctor.name)
        );
        setFilteredDoctors(relatedDoctors);
      } else {
        // If no service is selected, show all doctors
        setFilteredDoctors(doctors);
      }
    } else {
      setFilteredDoctors(doctors);
    }
  }, [selectedService, services, doctors]);

  useEffect(() => {
    if (doctorName) {
      // Filter services based on the selected doctor
      const relatedServices = services.flatMap((serviceCategory) =>
        serviceCategory.doctors.includes(doctorName)
          ? serviceCategory.services
          : []
      );
      setFilteredServices(relatedServices);
    } else {
      // Show all services if no doctor is selected
      setFilteredServices(
        services.flatMap((serviceCategory) => serviceCategory.services)
      );
    }
  }, [doctorName, services]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (time < "08:00" || time > "18:00") {
      alert("Please select a time between 08:00 and 18:00.");
      return;
    }
    const selectedDoctor = doctors.find((doctor) => doctor.name === doctorName);

    const appointmentDetails = {
      patientName: name,
      patientEmail: email,
      date,
      time,
      doctorName: selectedDoctor ? selectedDoctor.name : null,
      doctorEmail: selectedDoctor ? selectedDoctor.email : null,
      clinicEmail,
      selectedService: selectedService,
      appointmentType,
      attachment: attachment ? attachment.name : null,
      additionalInfo,
    };

    // Тут код для отправки данных на сервер
    console.log("Appointment details:", appointmentDetails);
    // Например, отправка запроса к вашему API
    try {
      // ...API call or form submission logic
      // On successful submission:
      alert("Appointment booked successfully!");

      // Resetting form fields
      setName("");
      setEmail("");
      setDate("");
      setTime("");
      setDoctorName("");
      setAppointmentType("");
      setAttachment(null);
      setAdditionalInfo("");
      setSymptoms({
        temperature: false,
        throatPain: false,
        backPain: false,
        highBloodPressure: false,
        headache: false,
        weakness: false,
        weightLoss: false,
        lossOfAppetite: false,
        enlargedLymphNodes: false,
        abdominalPain: false,
        bloating: false,
        diarrheaOrConstipation: false,
        visionImpairment: false,
        other: "",
      });
      setSymptomStartDate("");
      setMedicationsUsed("");
      setMedicationEffectiveness("");
      setCurrentDiseases("");
      setInjuryDate("");
      setAllergies("");
      setRegularMedications("");
    } catch (error) {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
      alert("Failed to book the appointment.");
    }
  };

  const handleTypeChange = (event) => {
    setAppointmentType(event.target.value);
    // Reset attachment and additional info when appointment type changes
    setAttachment(null);
    setAdditionalInfo("");
  };

  const handleAttachmentChange = (event) => {
    setAttachment(event.target.files[0]);
  };

  const handleSymptomChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleTimeChange = (e) => {
    let selectedTime = e.target.value;
    const [hours, minutes] = selectedTime.split(':').map(Number);

    // Round to the nearest hour if minutes are not zero
    if (minutes !== 0) {
      selectedTime = `${String(hours).padStart(2, '0')}:00`;
    }

    setTime(selectedTime);
  };

  return (
    <div>

        <div className="nav-nav">
         {/* eslint-disable-next-line */}
            <a href="#" onClick={()=> navigate('/')}>Home/  </a>
            <p >Appointment</p>
          </div>

      <h2>Make an Appointment</h2>

      <p>
        Welcome to our online appointment scheduling system. Here, you can
        easily book a visit with one of our experienced medical professionals at
        a time that suits you best. To schedule your appointment, please fill in
        the form below with your details. Select the doctor you wish to see,
        choose a date and time, and provide your contact information. Our team
        is dedicated to providing you with the best care possible. If you have
        any specific needs or questions, feel free to mention them in the form
        or contact us directly. We are here to assist you every step of the way.
        Thank you for choosing our clinic for your healthcare needs. We look
        forward to serving you soon!
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            min={minDate}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            min="08:00"
            max="18:00"
            value={time}
            onChange={handleTimeChange}
            required
          />
        </div>
        <DoctorSelector
          doctors={filteredDoctors}
          doctorName={doctorName}
          setDoctorName={setDoctorName}
        />
        {/* <DoctorSelector doctors={doctors} doctorName={doctorName} setDoctorName={setDoctorName} /> */}
        {/* <ServiceSelector services={services} selectedService={selectedService} setSelectedService={setSelectedService}/> */}
        <ServiceSelector
          services={filteredServices}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
        <label>
          Appointment Type:
          <select value={appointmentType} onChange={handleTypeChange} required>
            <option value="">Select...</option>
            <option value="examination">Discuss Examination Results</option>
            <option value="complaint">Discuss Complaints or Illness</option>
          </select>
        </label>
        {appointmentType === "examination" && (
          <label>
            Attach Results:
            <input type="file" onChange={handleAttachmentChange} />
          </label>
        )}
        {appointmentType === "complaint" && (
          <div>
            <p>What complaints do you want to discuss with the doctor?</p>
            <label>
              <input
                type="checkbox"
                name="temperature"
                checked={symptoms.temperature}
                onChange={handleSymptomChange}
              />{" "}
              Temperature
            </label>
            <label>
              <input
                type="checkbox"
                name="throatPain"
                checked={symptoms.throatPain}
                onChange={handleSymptomChange}
              />{" "}
              Throat pain
            </label>
            <label>
              <input
                type="checkbox"
                name="backPain"
                checked={symptoms.backPain}
                onChange={handleSymptomChange}
              />{" "}
              Back pain
            </label>
            <label>
              <input
                type="checkbox"
                name="highBloodPressure"
                checked={symptoms.highBloodPressure}
                onChange={handleSymptomChange}
              />{" "}
              High blood pressure
            </label>
            <label>
              <input
                type="checkbox"
                name="headache"
                checked={symptoms.headache}
                onChange={handleSymptomChange}
              />{" "}
              Headache
            </label>
            <label>
              <input
                type="checkbox"
                name="weakness"
                checked={symptoms.weakness}
                onChange={handleSymptomChange}
              />{" "}
              Weakness
            </label>
            <label>
              <input
                type="checkbox"
                name="weightLoss"
                checked={symptoms.weightLoss}
                onChange={handleSymptomChange}
              />{" "}
              Weight loss
            </label>
            <label>
              <input
                type="checkbox"
                name="lossOfAppetite"
                checked={symptoms.lossOfAppetite}
                onChange={handleSymptomChange}
              />{" "}
              Loss of appetite
            </label>
            <label>
              <input
                type="checkbox"
                name="enlargedLymphNodes"
                checked={symptoms.enlargedLymphNodes}
                onChange={handleSymptomChange}
              />{" "}
              Enlarged lymph nodes
            </label>
            <label>
              <input
                type="checkbox"
                name="abdominalPain"
                checked={symptoms.abdominalPain}
                onChange={handleSymptomChange}
              />{" "}
              Abdominal pain
            </label>
            <label>
              <input
                type="checkbox"
                name="bloating"
                checked={symptoms.bloating}
                onChange={handleSymptomChange}
              />{" "}
              Bloating
            </label>
            <label>
              <input
                type="checkbox"
                name="diarrheaOrConstipation"
                checked={symptoms.diarrheaOrConstipation}
                onChange={handleSymptomChange}
              />{" "}
              Diarrhea or Constipation
            </label>
            <label>
              <input
                type="checkbox"
                name="visionImpairment"
                checked={symptoms.visionImpairment}
                onChange={handleSymptomChange}
              />{" "}
              Vision impairment
            </label>
            <label>
              Other:{" "}
              <input
                type="text"
                name="other"
                value={symptoms.other}
                onChange={handleSymptomChange}
              />
            </label>
            <div className="otherSymptoms">
              <label>
                When did the symptoms first appear? (Date):
                <input
                  type="date"
                  value={symptomStartDate}
                  onChange={(e) => setSymptomStartDate(e.target.value)}
                />
              </label>

              <label>
                What medications or methods have you used to alleviate symptoms?
                <textarea
                  value={medicationsUsed}
                  onChange={(e) => setMedicationsUsed(e.target.value)}
                />
              </label>

              <label>
                Was there any effect from the medications or methods used?
                <textarea
                  value={medicationEffectiveness}
                  onChange={(e) => setMedicationEffectiveness(e.target.value)}
                />
              </label>

              <label>
                What diseases/diagnoses are you being treated for by other
                doctors?
                <textarea
                  value={currentDiseases}
                  onChange={(e) => setCurrentDiseases(e.target.value)}
                />
              </label>

              <label>
                Have you had any injuries or surgeries? If yes, please provide
                the date:
                <input
                  type="date"
                  value={injuryDate}
                  onChange={(e) => setInjuryDate(e.target.value)}
                />
              </label>

              <label>
                Do you have any allergies to medications or foods?
                <textarea
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                />
              </label>

              <label>
                What medications, vitamins, dietary supplements do you take
                regularly or in courses?
                <textarea
                  value={regularMedications}
                  onChange={(e) => setRegularMedications(e.target.value)}
                />
              </label>
            </div>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Appointment;
