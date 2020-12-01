import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import moment from "moment";

import { getUser } from "../../api/user";

import AvatarNotFound from "../../assets/png/avatar-not-found.png";

import "./Tweet.scss";
import { API_HOST } from "../../utils/constants";
import { replaceURLWithHTMLLinks } from "../../utils/functions";

function Tweet({ tweet }) {
  const [userInfo, setUserInfo] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

  const { date, message, userId } = tweet;

  console.log(userInfo);

  useEffect(() => {
    getUser(userId).then(response => {
      setUserInfo(response);
      setAvatarUrl(
        response?.avatar
          ? `${API_HOST}/getAvatar?id=${response.id}`
          : AvatarNotFound
      );
    });
  }, [userId]);

  console.log(tweet);
  return (
    <div className="tweet">
      <Image className="avatar" src={avatarUrl} roundedCircle />
      <div>
        <div className="name">
          {userInfo?.name} {userInfo?.lastname}
          <span>{moment(date).calendar()}</span>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: replaceURLWithHTMLLinks(message),
          }}
        />
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};

export default Tweet;
