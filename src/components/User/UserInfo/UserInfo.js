import React from "react";
import moment from "moment";
import localization from "moment/locale/es-us";
import PropTypes from "prop-types";

import { DateBirthIcon, LinkIcon, LocationIcon } from "../../../utils/icons";

import "./UserInfo.scss";

function UserInfo({ userinfo }) {
  return (
    <div className="user-info">
      <h2 className="name">
        {userinfo?.name} {userinfo?.lastname}
      </h2>
      <p className="email">{userinfo?.email}</p>
      {userinfo?.biography && (
        <div className="biography">{userinfo.biography}</div>
      )}
      <div className="more-info">
        {userinfo?.location && (
          <p>
            <LocationIcon />
            {userinfo.location}
          </p>
        )}
        {userinfo?.website && (
          <a href={userinfo.website} target="_blank" rel="noopener noreferrer">
            <LinkIcon />
            {userinfo.website}
          </a>
        )}
        {userinfo?.birthday && (
          <p>
            <DateBirthIcon />
            {moment(userinfo.birthday).locale("us", localization).format("LL")}
          </p>
        )}
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  userinfo: PropTypes.object.isRequired,
};

export default UserInfo;
