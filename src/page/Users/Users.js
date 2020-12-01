import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";

import BasicLayout from "../../layouts/BasicLayout";

import useLogin from "../../hooks/useLogin";

import { getFollow } from "../../api/follow";

import "./Users.scss";

function Users() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getFollow("page=1&type=new&search=")
      .then(response => {
        console.log(response);
      })
      .catch(() => {
        setUsers([]);
      });
  }, []);

  const { setRefreshCheckLogin } = useLogin();

  return (
    <BasicLayout className="users">
      <div className="users__title">
        <h2>Users...!</h2>
        <input type="text" placeholder="Search users" />
      </div>

      <ButtonGroup className="users__options">
        <Button>Following</Button>
        <Button>New</Button>
      </ButtonGroup>
    </BasicLayout>
  );
}

export default Users;
