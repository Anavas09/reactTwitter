import React from "react";
import PropTypes from "prop-types";
import { Button, Col } from "react-bootstrap";

import SingInForm from "../../components/Forms/SignInForm";
import SignUpForm from "../../components/Forms/SignUpForm";

import LogoWhite from "../../assets/png/logo-white.png";

function RightComponent({ openModal, setShowModal }) {
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <img src={LogoWhite} alt="GoTwitterRight" />
        <h2>See what’s happening in the world right now</h2>
        <h3>Join Twitter today.</h3>
        <Button
          onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}
          variant="primary"
        >
          Sign up
        </Button>
        <Button
          onClick={() => openModal(<SingInForm />)}
          variant="outline-primary"
        >
          Log in
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