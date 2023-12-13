import { useState } from "react";
import Survey from "./Survey";
import "./App.css";
import DoctorSelector from "./DoctorSelector";

function Appointment({ doctors, clinicEmail }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [doctorId, setDoctorId] = useState("");
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (time < "08:00" || time > "18:00") {
      alert("Please select a time between 08:00 and 18:00.");
      return;
    }
    const selectedDoctor = doctors.find(
      (doctor) => doctor.id.toString() === doctorId
    );

    const appointmentDetails = {
      patientName: name,
      patientEmail: email,
      date,
      time,
      doctorName: selectedDoctor ? selectedDoctor.name : null,
      doctorEmail: selectedDoctor ? selectedDoctor.email : null,
      clinicEmail,
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
        alert('Appointment booked successfully!');
    
        // Resetting form fields
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setDoctorId('');
        setAppointmentType('');
        setAttachment(null);
        setAdditionalInfo('');
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
        setSymptomStartDate('');
        setMedicationsUsed('');
        setMedicationEffectiveness('');
        setCurrentDiseases('');
        setInjuryDate('');
        setAllergies('');
        setRegularMedications('');
    
      } catch (error) {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to book the appointment.');
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

  const handleAdditionalInfoChange = (event) => {
    setAdditionalInfo(event.target.value);
  };
  const handleSymptomChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
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
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <DoctorSelector doctors={doctors} doctorId={doctorId} setDoctorId={setDoctorId} />
        {/* <div>
          <label htmlFor="doctor">Doctor:</label>
          <select
            id="doctor"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
          >
            <option value="">Select a Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.position}
              </option>
            ))}
          </select>
        </div> */}

        <label>
          Appointment Type:
          <select value={appointmentType} onChange={handleTypeChange}>
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
