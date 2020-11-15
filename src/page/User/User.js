import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

import useLogin from "../../hooks/useLogin";

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

  console.log(userData);

  const { user } = useLogin();
  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>{`${user?.name} ${user?.lastname}`}</h2>
      </div>
      <div className="user__banner">User Banner</div>
      <div className="user__info">User Info</div>
      <div className="user__tweets">User tweets</div>
    </BasicLayout>
  );
}

export default withRouter(User);
