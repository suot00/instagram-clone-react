import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "../Header/header.css";
import { Icon } from "@iconify/react";

export default function Header(props) {
  const [openModal, setOpenModal] = useState(true);
  const [logOut, setLogOut] = useState(false);
  const [logIn, setLogIn] = useState(false);

  const transferMesageSignUp = () => {
    setOpenModal(true);
    props.takeMessSignUp(openModal);
  };

  const transferMessageLogOut = () => {
    setLogOut(true);
    props.takeMessLogOut(logOut);
  };

  const transferMessageLogIn = () => {
    setLogIn(true);
    props.takeMessLogIn(logIn);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header_logo">
          <a href="/#">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="header_search">
          <input type="text" placeholder="Tìm kiếm" />
          <i className="bx bx-search-alt-2">
            <Icon icon="ci:search" />
          </i>
        </div>
        <div className="header_login">
          {props.user ? (
            <button className="btn btn-login" onClick={transferMessageLogOut}>
              Log out
            </button>
          ) : (
            <div>
              <button className="btn btn-login" onClick={transferMessageLogIn}>
                Sign in
              </button>
              <button
                onClick={transferMesageSignUp}
                className="btn btn-sign-up"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
