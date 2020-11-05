import React from "react";
import PropTypes from "prop-types";

import "./SingUpForm.scss";
import { Button, Col, Form, Row } from "react-bootstrap";

function SingUpForm({ setShowModal }) {

  const handleOnSubmit = e => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div className="sign-up-form">
      <h2>Create a new account</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Lastname" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control type="email" placeholder="Add an Email" />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="password" placeholder="Password" />
            </Col>
            <Col>
              <Form.Control type="password" placeholder="Confirm Passwrod" />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

SingUpForm.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default SingUpForm;
