import Card from "../reusableComponents/Card";
import { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const servicesUrl = "http://localhost:5000/api/services";
    const fetchServices = async () => {
      try {
        const response = await fetch(servicesUrl);
        const services = await response.json();
        setServices(services);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className=" bg-amber-200 text-center">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="text-lg">
          We offer a wide range of services to meet your needs. Our team of experts is dedicated to providing high-quality solutions. The services are designed to cater to different learning styles
          and preferences. Each of our clients receives personalized attention to ensure their success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* filters */}

          {services.map((service) => (
            <Card key={service.id} title={service.name} content={service.description} img={service.img} />
          ))}
        </div>
      </div>
    </div>
  );
}
