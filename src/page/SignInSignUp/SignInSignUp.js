import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import BasicModal from '../../components/Modals/BasicModal';

import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

import "./SignInSignUp.scss";

function SignInSignUp() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = content => {
    setShowModal(true)
    setModalContent(content)
  }
  
  return (
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent openModal={openModal} setShowModal={setShowModal}/>
        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal}>
        {modalContent}
      </BasicModal>
    </>
  );
}

export default SignInSignUp;