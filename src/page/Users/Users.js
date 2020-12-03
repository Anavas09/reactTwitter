import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";

import BasicLayout from "../../layouts/BasicLayout";
import ListUsers from "../../components/ListUsers";

import useLogin from "../../hooks/useLogin";
import useUsersQuery from "../../hooks/useUsersQuery";

import { getFollow } from "../../api/follow";

import "./Users.scss";

function Users({ location }) {
  const [users, setUsers] = useState(null);

  const params = useUsersQuery(location);
  console.log(params);

  const urlParams = queryString.stringify(params);
  console.log(urlParams);

  useEffect(() => {
    getFollow(urlParams)
      .then(response => {
        if (isEmpty(response)) {
          setUsers([]);
        } else {
          setUsers(response);
        }
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

      {!users ? (
        <div className="users__loading">
          <Spinner animation="border" variant="info" />
          Searching...
        </div>
      ) : (
        <ListUsers users={users} />
      )}
    </BasicLayout>
  );
}

export default withRouter(Users);
