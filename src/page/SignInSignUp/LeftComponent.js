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
          <FontAwesomeIcon icon="search" /> Follow your interests.
        </h2>
        <h2>
          <FontAwesomeIcon icon="users" /> Hear what people are talking about.
        </h2>
        <h2>
          <FontAwesomeIcon icon="comment" /> Join the conversation.
        </h2>
      </div>
    </Col>
  );
}

export default LeftComponent;
