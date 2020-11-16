import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

import useLogin from "../../../hooks/useLogin";

import { API_HOST } from "../../../utils/constants";

import AvatarNotFound from "../../../assets/png/avatar-not-found.png";

import "./BannerAvatar.scss";

function BannerAvatar({ user }) {

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
          {loggedUser._id === user.id && <Button>Edit profile</Button>}
          {loggedUser._id !== user.id && <Button>Follow</Button>}
        </div>
      )}
    </div>
  );
}

BannerAvatar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default BannerAvatar;
