import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Spinner } from "react-bootstrap";

import "./SingInForm.scss";

function SingInForm() {
  
  const handleOnSubmit = e => {
    e.preventDefault();
    console.log("Login...");
  };

  return (
    <div className="sign-in-form">
      <h2>Login</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

SingInForm.propTypes = {
  prop: PropTypes,
};

export default SingInForm;