import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

import useLogin from "../../../hooks/useLogin";

import { API_HOST } from "../../../utils/constants";

import AvatarNotFound from "../../../assets/png/avatar-not-found.png";

import "./BannerAvatar.scss";
import ConfigModal from "../../Modals/ConfigModal";

function BannerAvatar({ user }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = content => {
    setShowModal(true);
    setModalContent(content);
  };
  

  const context = useLogin();
  const loggedUser = context.user;

  const bannerUrl = user?.banner ? `${API_HOST}/getBanner?id=${user.id}` : null;

  const avatarUrl = user?.avatar
    ? `${API_HOST}/getAvatar?id=${user.id}`
    : AvatarNotFound;

  console.log(bannerUrl);

  return (
    <div
      className="banner-avatar"
      style={{ backgroundImage: `url('${bannerUrl}')` }}
    >
      <div
        className="avatar"
        style={{ backgroundImage: `url('${avatarUrl}')` }}
      />
      {user && (
        <div className="options">
          {loggedUser._id === user.id && <Button onClick={() => setShowModal(true)}>Edit profile</Button>}
          {loggedUser._id !== user.id && <Button>Follow</Button>}
        </div>
      )}

      <ConfigModal setShow={setShowModal} show={showModal} title="Edit Form">
        Edit Form
      </ConfigModal>
    </div>
  );
}

BannerAvatar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default BannerAvatar;
