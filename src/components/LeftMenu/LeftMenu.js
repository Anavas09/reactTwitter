import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import LogoWhite from "../../assets/png/logo-white.png";

import "./LeftMenu.scss";

function LeftMenu() {
  return (
    <div className="left-menu">
      <img className="logo" src={LogoWhite} alt="GoTwitterWhite" />

      <Link to="/">
        <FontAwesomeIcon icon="home" /> Home
      </Link>
      <Link to="/users">
        <FontAwesomeIcon icon="users" /> Users
      </Link>
      <Link to="/profile">
        <FontAwesomeIcon icon="user" /> Profile
      </Link>
      <Link to="/logout">
        <FontAwesomeIcon icon="power-off" /> Logout
      </Link>

      <Button>Tweet</Button>
    </div>
  );
}

export default LeftMenu;
