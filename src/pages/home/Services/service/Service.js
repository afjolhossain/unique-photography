import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { name, img, discription, id } = service;
  return (
    <Col xs={12} md={6} lg={4} className="">
      <Card className="card">
        <Card.Img
          variant="top"
          style={{ width: "100px", height: "100px", margin: "auto" }}
          src={img}
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{discription}</Card.Text>
          <hr
            style={{
              width: "100px",
              margin: "auto",
              backgroundColor: "#FF824A",
              height: "3px",
            }}
          ></hr>

          <button className="order-btn">
            <Link className="link" to={`/service/:` + id}>
              order
            </Link>
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
