import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import BasicModal from '../../components/Modals/BasicModal';

import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

import "./SignInSignUp.scss";

function SignInSignUp() {
  const [showModal, setShowModal] = useState(true);
  const [modalContent, setModalContent] = useState(null);

  const openModal = () => {
    setShowModal(true)
  }
  
  return (
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent open={openModal}/>
        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal}>
        <div><h2>Modal Content</h2></div>
      </BasicModal>
    </>
  );
}

export default SignInSignUp;