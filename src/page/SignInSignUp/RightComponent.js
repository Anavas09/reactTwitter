import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col } from "react-bootstrap";

import SingInForm from "../../components/Forms/SignInForm";
import SignUpForm from "../../components/Forms/SignUpForm";

import LogoWhite from "../../assets/png/logo-white.png";

function RightComponent({ openModal, setShowModal }) {
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <img src={LogoWhite} alt="GoTwitterRight" />
        <h2>
          <FontAwesomeIcon icon="search" /> Mira lo que esta pasando en el mundo
          en este momento
        </h2>
        <h3>
          <FontAwesomeIcon icon="users" /> Unete a Twitter hoy mismo
        </h3>
        <Button
          onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}
          variant="primary"
        >
          Sign Up
        </Button>
        <Button
          onClick={() => openModal(<SingInForm />)}
          variant="outline-primary"
        >
          Login
        </Button>
      </div>
    </Col>
  );
}

RightComponent.propTypes = {
  openModal: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default RightComponent;