import React from "react";
import PropTypes from "prop-types";
import { isEmpty, map } from "lodash";

import UserInfo from "./UserInfo";

import "./ListUsers.scss";

function ListUsers({ users }) {

  console.log(users);
  if (isEmpty(users)) {
    return <h2 className="list-users__not-users">No users founded</h2>;
  }

  return (
    <ul className="list-users">
      {map(users, user => {
        return <UserInfo key={user.id} user={user} />;
      })}
    </ul>
  );
}

ListUsers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      lastname: PropTypes.string,
    })
  ).isRequired,
};

export default ListUsers;
