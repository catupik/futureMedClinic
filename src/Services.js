import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Services({ services, doctors }) {

  const navigate = useNavigate();

  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleAppointmentClick = () => {
    navigate('/appointment', { state: { selectedDoctor } });
  };  
  
  
  const filteredServices = services.flatMap(serviceCategory => {
    // Фильтруем услуги внутри категории
    const filteredInnerServices = serviceCategory.services.filter(service =>
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Проверяем, соответствует ли категория выбранному врачу и поисковому запросу
    const isDoctorMatch = selectedDoctor ? serviceCategory.doctors.includes(selectedDoctor) : true;
    const isSearchMatch = filteredInnerServices.length > 0 || serviceCategory.doctors.some(doctor => doctor.toLowerCase().includes(searchTerm.toLowerCase()));

    return isDoctorMatch && isSearchMatch ? { ...serviceCategory, services: filteredInnerServices } : null;
  }).filter(Boolean); // Удаляем null значения

  return (
    <div>

        <div className="nav-nav">
          {/* eslint-disable-next-line */}
            <a href="#" onClick={()=> navigate('/')}>Home/  </a>
            <p >Services</p>
          </div>

      <h1>Our Services</h1>

      <div>
        <input type='text' placeholder='Search service or doctor'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button>Search</button>

        <select 
        onChange={(e)=> setSelectedDoctor(e.target.value)}
        value={selectedDoctor}>
        <option value="">All Doctors</option> 
        {doctors.map((doctor)=>(
          <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
        )
        )} 
        </select> 

      </div>
      

      {filteredServices.map((item) => {
        const { id, category, doctors = [], services = [] } = item;
        return (
          <div key={id}>
            <h2>{category}</h2>

            <div className="docs">
  {selectedDoctor
    ? <h3>{selectedDoctor}</h3>
    : doctors.map((doctor, docIndex) => (
        <h3 key={docIndex}>{doctor}</h3>
      ))
  }
</div>


            <div className="allservices">
              {services.map((service, index) => (
                <div key={index}>
                  <p>{service.description}</p>
                  <img
                    src={service.image}
                    alt="service"
                    width="200px"
                    height="300px"
                  />
                  <div>
                    <button onClick={handleAppointmentClick}>Make an appointment</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Services;

