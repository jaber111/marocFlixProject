import React from "react";
import "./Nav.css";
import Avatar from "./img/avatar.png";
function Nav() {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
      ></img>
      <img className="nav__avatar" src={Avatar} alt="netflix avatar"></img>
    </div>
  );
}

export default Nav;
