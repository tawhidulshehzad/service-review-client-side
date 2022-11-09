import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Form className="my-5 w-75 mx-auto shadow-3-strong p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger">{/* {error} */}</Form.Text>
      </Form>
      <p>
        New to Cloud Food <Link to="/signup">Sign Up</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
