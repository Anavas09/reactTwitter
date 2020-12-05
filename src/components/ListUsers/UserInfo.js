import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Image, Media } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getUser } from "../../api/user";

import AvatarNotFound from "../../assets/png/avatar-not-found.png";
import { API_HOST } from "../../utils/constants";

function UserInfo({ user }) {
  const [userInfo, setUserInfo] = useState(null);

  const { id } = user;

  useEffect(() => {
    getUser(id).then(response => {
      setUserInfo(response);
    });
  }, [id]);

  return (
    <Media className="list-users__user" as={Link} to={`/${id}`}>
      <Image
        className="mr-3"
        height={64}
        width={64}
        roundedCircle
        src={
          userInfo?.avatar ? `${API_HOST}/getAvatar?id=${id}` : AvatarNotFound
        }
        alt={`${user?.name} ${user?.lastname}`}
      />

      <Media.Body> 
        <h5>
          {user?.name} {user?.lastname}
        </h5>
        <p>{userInfo?.biography}</p>
      </Media.Body>
    </Media>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    lastname: PropTypes.string,
  }).isRequired,
};

export default UserInfo;
