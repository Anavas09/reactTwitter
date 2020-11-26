import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

import ConfigModal from "../../Modals/ConfigModal";
import EditUserForm from "../../Forms/EditUserForm/EditUserForm";

import { checkFollow, followUser, unfollowUser } from "../../../api/follow";

import useLogin from "../../../hooks/useLogin";

import { API_HOST } from "../../../utils/constants";

import AvatarNotFound from "../../../assets/png/avatar-not-found.png";

import "./BannerAvatar.scss";

function BannerAvatar({ user }) {
  const [showModal, setShowModal] = useState(false);
  const [following, setFollowing] = useState(null);
  const [reloadFollow, setReloadFollow] = useState(false);

  const context = useLogin();
  const loggedUser = context.user;

  const bannerUrl = user?.banner ? `${API_HOST}/getBanner?id=${user.id}` : null;

  const avatarUrl = user?.avatar
    ? `${API_HOST}/getAvatar?id=${user.id}`
    : AvatarNotFound;

  console.log(bannerUrl);

  useEffect(() => {
    if (user) {
      checkFollow(user.id).then(response => {
        if (response?.status) {
          setFollowing(true);
        } else {
          setFollowing(false);
        }
      });
    }
    setReloadFollow(false);
  }, [reloadFollow, user]);

  const onFollow = () => {
    followUser(user.id).then(() => {
      toast.dark("Following");
      setReloadFollow(true);
    });
  };

  const onUnfollow = () => {
    unfollowUser(user.id).then(() => {
      toast.dark("Unfollowed");
      setReloadFollow(true);
    });
  };

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
          {loggedUser._id === user.id && (
            <Button onClick={() => setShowModal(true)}>Edit profile</Button>
          )}
          {loggedUser._id !== user.id &&
            following !== null &&
            (following ? (
              <Button className="unfollow" onClick={onUnfollow}>
                <span>Following</span>
              </Button>
            ) : (
              <Button onClick={onFollow}>Follow</Button>
            ))}
        </div>
      )}

      <ConfigModal setShow={setShowModal} show={showModal} title="Edit Form">
        <EditUserForm setShowModal={setShowModal} user={user} />
      </ConfigModal>
    </div>
  );
}

BannerAvatar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default BannerAvatar;
