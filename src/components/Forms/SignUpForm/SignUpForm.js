import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { size, values } from "lodash";

import { isEmailValid } from "../../../utils/validations";
import { signUpApi } from "../../../api/signUp";

import "./SignUpForm.scss";

const initialValues = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SingUpForm({ setShowModal }) {
  const [formData, setFormData] = useState(initialValues);
  const [signUpLoading, setSignUpLoading] = useState(false);

  /*This only work with input forms. If we have a select, checkbox, etc. We need an onChange on every field */
  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    //setShowModal(false);
    let validCount = 0;

    values(formData).some(value => {
      value && validCount++;
      return null;
    });

    console.log(validCount);

    if (validCount !== size(formData)) {
      toast.warn(`Fill all fields (${validCount}/${size(formData)})`);
    } else {
      if (!isEmailValid(formData.email)) {
        toast.warn("Invalid email");
      } else if (formData.password !== formData.confirmPassword) {
        toast.warn("Password must be the same");
      } else if (size(formData.password) < 6) {
        toast.warn("Password must be at least 6 characters");
      } else {
        setSignUpLoading(true);
        toast.success("Signing...!");
        signUpApi(formData)
          .then(response => {
            if (response.code) {
              toast.warn(response.message);
            } else {
              toast.success("Signup Succesfully");
              setShowModal(false);
              setFormData(initialValues);
            }
          })
          .catch(() => {
            toast.error("Server error. Try again later");
          })
          .finally(() => {
            setSignUpLoading(false);
          });
      }
    }
  };

  return (
    <div className="sign-up-form">
      <h2>Create a new account</h2>
      {/*This (only one onChange for all inputs) only work with input forms. If we have a select, checkbox, etc. We need an onChange on every field */}
      <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={formData.name}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Lastname"
                name="lastname"
                defaultValue={formData.lastname}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Add an Email"
            name="email"
            defaultValue={formData.email}
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                defaultValue={formData.password}
              />
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Confirm Passwrod"
                name="confirmPassword"
                defaultValue={formData.confirmPassword}
              />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit">
          {!signUpLoading ? "Sign Up" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}

SingUpForm.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default SingUpForm;
