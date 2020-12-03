import React from "react";
import PropTypes from "prop-types";
import { isEmpty, map } from "lodash";

import "./ListUsers.scss";
import UserDetails from "./UserInfo";

function ListUsers({ users }) {

  console.log(users);
  if (isEmpty(users)) {
    return <h2 className="list-users__not-users">No users founded</h2>;
  }

  return (
    <ul>
      {map(users, user => {
        return <UserDetails key={user.id} user={user} />;
      })}
    </ul>
  );
}

ListUsers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      lastname: PropTypes.string,
    })
  ).isRequired,
};

export default ListUsers;
