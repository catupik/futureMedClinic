import { useEffect } from "react";

function ServiceSelector({ filteredServices, selectedService, setSelectedService }) {

    useEffect(()=>{
        
      
        if(selectedService){
            // Check if the selected service exists in the filtered services
      const serviceExists = filteredServices.some(service => service.description === selectedService);
      if (!serviceExists) {
        // If the selected service does not exist in the filtered services, reset the selected service
        setSelectedService('');
        }
    }}, [filteredServices, selectedService, setSelectedService])
    return (
      <div>
        <label htmlFor="service">Service:</label>
        <select
          id="service"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Select a Service</option>
          {filteredServices.map((service, index) => (
            <option key={index} value={service.description}>
              {service.description}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default ServiceSelector;
  