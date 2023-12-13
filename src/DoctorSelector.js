function DoctorSelector({ doctors, doctorId, setDoctorId }) {
    return (
      <div>
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
      </div>
    );
  }

  export default DoctorSelector;