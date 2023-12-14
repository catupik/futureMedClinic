function DoctorSelector({ doctors, doctorName, setDoctorName }) {
  return (
    <div>
      <label htmlFor="doctor">Doctor:</label>
      <select
        id="doctor"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
      >
        <option value="">Select a Doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.name}>
            {doctor.name} - {doctor.position}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DoctorSelector;
