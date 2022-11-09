import { MDBTextArea } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const { title, _id, img, description, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || "unregistered";
    const url = form.url.value;
    const message = form.message.value;

    const reviews = {
      service: _id,
      serviceName: title,
      name,
      url,
      email,
      message,
      price,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review has taken");
          window.location.reload(false);
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="d-lg-flex">
        <div className="col-lg-6 p-3">
          <Card className="w-100">
            <Card.Img style={{ height: "300px" }} variant="top" src={img} />

            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <p>Price: ${price}</p>
            </Card.Body>
          </Card>
        </div>
        <div className="p-3 col-lg-6">
          <h2> Writer your Review</h2>
          <form onSubmit={handleReview}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="w-100 my-3 p-2"
            />
            <input
              name="url"
              type="text"
              placeholder="Photo URL"
              className="w-100 p-2 my-3 "
            />
            <input
              name="email"
              placeholder="Your email"
              defaultValue={user?.email}
              className="w-100 my-3 p-2"
            />
            <MDBTextArea
              name="message"
              type="text"
              placeholder="Your text"
              className="w-100 my-3 py-5 text-center"
              label="Message"
              id="textAreaExample"
              rows={4}
            />
            {/* btn */}
            <input
              className="btn btn-primary"
              type="submit"
              value="Submit your reviews"
            />
          </form>
        </div>
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default ServiceDetails;
