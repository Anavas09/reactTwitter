import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import { CloseIcon } from "../../../utils/icons";

import "./ConfigModal.scss";

function ConfigModal({children, setShow, show, title}) {
  return (
    <Modal
      className="config-modal"
      onHide={() => setShow(false)}
      size="lg"
      show={show}
      centered
    >
      <Modal.Header>
        <Modal.Title>
          <CloseIcon onClick={() => setShow(false)} />
          <h2>{title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

ConfigModal.propTypes = {
  children: PropTypes.any.isRequired,
  setShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}

export default ConfigModal;