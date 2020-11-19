import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import LogoWhite from "../../../assets/png/logo-white.png";

import "./BasicModal.scss";

function BasicModal({ children, show, setShow }) {
  return (
    <Modal
      className="basic-modal"
      onHide={() => setShow(false)}
      size="lg"
      show={show}
      centered
    >
      <Modal.Header>
        <Modal.Title>
          <img src={LogoWhite} alt="LogoWhiteGoTwitter"/>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

BasicModal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

export default BasicModal;
