import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/png/logo.png";

function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      <img src={Logo} alt="GoTwitterLeft" />
      <div>
        <h2>
          <FontAwesomeIcon icon="search" /> Sigue lo que te interesa
        </h2>
        <h2>
          <FontAwesomeIcon icon="users" /> Enterate de lo que esta hablando la
          gente
        </h2>
        <h2>
          <FontAwesomeIcon icon="comment" /> Unete a la conversacion
        </h2>
      </div>
    </Col>
  );
}

export default LeftComponent;
