import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

import "./BasicLayout.scss";
import LeftMenu from "../../components/LeftMenu";

function BasicLayout({ children, className }) {
  return (
    <Container className={`basic-layout ${className}`}>
      <Row>
        <Col xs={3} className="basic-layout__menu">
          <LeftMenu />
        </Col>
        <Col xs={9} className="basic-layout__content">
          {children}
        </Col>
      </Row>
    </Container>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
}

export default BasicLayout;
