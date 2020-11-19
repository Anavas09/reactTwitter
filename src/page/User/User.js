import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

import BannerAvatar from "../../components/User/BannerAvatar";
import UserInfo from "../../components/User/UserInfo";

import BasicLayout from "../../layouts/BasicLayout";

import "./User.scss";
import { getUser } from "../../api/user";

function User(props) {
  const [userData, setUserData] = useState(null);
  const { match } = props;
  const userID = match.params.id;

  useEffect(() => {
    getUser(userID)
      .then(res => {
        if(!res) toast.error("User not exist");
        setUserData(res);
      })
      .catch(() => toast.error("User not exist"));
  }, [userID]);

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>{userData ? `${userData.name} ${userData.lastname}` : "This user not exist"}</h2>
      </div>
      <BannerAvatar user={userData} />
      <UserInfo userinfo={userData}/>
      <div className="user__tweets">User tweets</div>
    </BasicLayout>
  );
}

export default withRouter(User);
