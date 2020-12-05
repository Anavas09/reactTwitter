import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";
import { useDebouncedCallback } from "use-debounce";

import BasicLayout from "../../layouts/BasicLayout";
import ListUsers from "../../components/ListUsers";

import useLogin from "../../hooks/useLogin";
import useUsersQuery from "../../hooks/useUsersQuery";

import { getFollow } from "../../api/follow";

import "./Users.scss";

function Users({ history, location }) {
  const [users, setUsers] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);

  const params = useUsersQuery(location);
  console.log(params);
  const [typeUser, setTypeUser] = useState(params.type || "follow");

  const urlParams = queryString.stringify(params);
  console.log(urlParams);

  const onSearch = useDebouncedCallback(value => {
    setUsers(null);
    history.push({
      search: queryString.stringify({ ...params, page: 1, search: value }),
    });
  }, 200);

  const { setRefreshCheckLogin } = useLogin();

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
  }, [urlParams]);

  const onChangeType = type => {
    if (type === "new") {
      setTypeUser("new");
    } else {
      setTypeUser("follow");
    }

    history.push({
      search: queryString.stringify({
        type: type,
        page: 1,
        search: "",
      }),
    });
  };

  const moreUsers = () => {
    setBtnLoading(true);
    const newTemp = params.page + 1;
  };

  return (
    <BasicLayout className="users">
      <div className="users__title">
        <h2>Users...!</h2>
        <input
          type="text"
          placeholder="Search users"
          onChange={e => onSearch.callback(e.target.value)}
        />
      </div>

      <ButtonGroup className="users__options">
        <Button
          className={typeUser === "follow" && "active"}
          onClick={() => onChangeType("follow")}
        >
          Following
        </Button>
        <Button
          className={typeUser === "new" && "active"}
          onClick={() => onChangeType("new")}
        >
          New
        </Button>
      </ButtonGroup>

      {!users ? (
        <div className="users__loading">
          <Spinner animation="border" variant="info" />
          Searching...
        </div>
      ) : (
        <>
          <ListUsers users={users} />
          <Button onClick={moreUsers} className="load-more">
            {!btnLoading ? (
              btnLoading !== 0 && "More users"
            ) : (
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
          </Button>
        </>
      )}
    </BasicLayout>
  );
}

export default withRouter(Users);
