import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ServiceCard = ({ service }) => {
  const { title, img, price, description } = service;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-2">
      <Card className="w-100">
        <Card.Img style={{ height: "300px" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <p>Price: ${price}</p>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
