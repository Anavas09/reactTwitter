import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col } from "react-bootstrap";

import LogoWhite from '../../assets/png/logo-white.png';

function RightComponent({open}) {
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
      <img src={LogoWhite} alt="GoTwitterRight" />
        <h2>
          <FontAwesomeIcon icon="search" /> Mira lo que esta pasando en el mundo en este momento
        </h2>
        <h3>
          <FontAwesomeIcon icon="users" /> Unete a Twitter hoy mismo
        </h3>
        <Button onClick={() => open()} variant="primary">Sign Up</Button>
        <Button variant="outline-primary">Login</Button>
      </div>
    </Col>
  );
}

export default RightComponent;