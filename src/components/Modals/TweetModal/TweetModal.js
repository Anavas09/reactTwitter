import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

import { CloseIcon } from "../../../utils/icons";

import "./TweetModal.scss";
import { addTweet } from "../../../api/tweet";

const maxLength = 280;

function TweetModal({ show, setShow }) {
  const [message, setMessage] = useState("");

  const handleOnSubmit = async e => {
    e.preventDefault();
    if (message.length > 1 && message.length <= maxLength) {
      await addTweet(message)
        .then(response => {
          if (response.code >= 200 && response.code < 300) {
            toast.dark(response.message);
            setMessage("");
            setShow(false);
            console.log("Submiting");
            window.location.reload();
          } else {
            toast.error(response.message);
          }
        })
        .catch(() => {
          toast.error("Error sending the tweet. Try again.");
        });
    }
  };

  const handleOnChange = e => {
    setMessage(e.target.value);
  };

  return (
    <Modal
      className="tweet-modal"
      onHide={() => setShow(false)}
      size="lg"
      show={show}
      centered
    >
      <Modal.Header>
        <Modal.Title>
          <CloseIcon onClick={() => setShow(false)} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleOnSubmit}>
          <Form.Control
            as="textarea"
            rows="6"
            placeholder="¿What's happend?"
            defaultValue={message}
            onChange={handleOnChange}
          />
          <span
            className={classNames("counter", {
              error: message.length > maxLength,
            })}
          >
            {message.length}
          </span>
          <Button
            style={{
              cursor:
                (message.length < 1 || message.length > maxLength) &&
                "not-allowed",
            }}
            type="submit"
            disabled={message.length < 1 || message.length > maxLength}
          >
            Tweet
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

TweetModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default TweetModal;
