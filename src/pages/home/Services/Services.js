import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "./service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services-container px-20">
      <br />
      <div className="text-container">
        <h6>Our Wedding Services</h6>
        <h1>We Provide The Best Services</h1>
        <p>
          Our efforts will help to have a better approach to the planning phase,
          help build a better vision to <br /> make it entertaining & memorable
        </p>
      </div>

      <Row className="g-3 mx-auto">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
