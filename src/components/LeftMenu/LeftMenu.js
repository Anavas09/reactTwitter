import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import TweetModal from "../Modals/TweetModal";

import useLogin from "../../hooks/useLogin";

import { logout } from "../../api/auth";

import LogoWhite from "../../assets/png/logo-white.png";

import "./LeftMenu.scss";

function LeftMenu() {
  const [show, setShow] = useState(false);

  const { setRefreshCheckLogin, user } = useLogin();

  console.log(user);

  const logOut = () => {
    logout();
    setRefreshCheckLogin(true);
  };

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

      <Button onClick={() => setShow(true)}>Tweet</Button>

      <TweetModal show={show} setShow={setShow}>
        <h2>Hola?</h2>
      </TweetModal>
    </div>
  );
}

export default LeftMenu;
