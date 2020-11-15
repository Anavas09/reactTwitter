import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { logout } from "../../api/auth";

import LogoWhite from "../../assets/png/logo-white.png";

import "./LeftMenu.scss";
import useLogin from "../../hooks/useLogin";

function LeftMenu() {
  const { setRefreshCheckLogin, user } = useLogin();

  console.log(user);

  const logOut = () => {
    logout();
    setRefreshCheckLogin(true);
  }

  return (
    <div className="left-menu">
      <img className="logo" src={LogoWhite} alt="GoTwitterWhite" />

      <Link to="/">
        <FontAwesomeIcon icon="home" /> Home
      </Link>
      <Link to="/users">
        <FontAwesomeIcon icon="users" /> Users
      </Link>
      <Link to={`${user?._id}`}>
        <FontAwesomeIcon icon="user" /> Profile
      </Link>
      <Link to="" onClick={() => logOut()}>
        <FontAwesomeIcon icon="power-off" /> Logout
      </Link>

      <Button>Tweet</Button>
    </div>
  );
}

export default LeftMenu;
