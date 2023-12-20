
function ServiceSelector({ services, selectedService, setSelectedService }) {
    return (
      <div>
        <label htmlFor="service">Service:</label>
        <select
          id="service"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Select a Service</option>
          {services && services.map((service, index) => (
            <option key={index} value={service.description}>
              {service.description}
            </option>
          ))}
        </select>
      </div>
    );
  }
export default ServiceSelector  