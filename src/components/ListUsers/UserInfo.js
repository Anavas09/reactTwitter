import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getUser } from "../../api/user";

function UserInfo({ user }) {
  const [userInfo, setUserInfo] = useState(null);

  const { id } = user;

  useEffect(() => {
    getUser(id).then(response => {
      setUserInfo(response);
    });
  }, [id]);

  return (
    <div>
      <h2>
        {userInfo?.name} {userInfo?.lastname}
      </h2>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default UserInfo;
