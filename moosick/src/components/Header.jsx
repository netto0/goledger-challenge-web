import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

import background from "../assets/img/backgroundClear.jpg";
import Logo from "./Logo";

export default function Header() {
  return (
    <header
      className={styles.headerContainer}
      style={{ backgroundImage: `url(${background})` }}
    >
      <NavLink className={styles.logoField} to="/" exact="true">
        <Logo />
      </NavLink>
      <div className={styles.menuList}>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "600" : "",
              color: isPending ? "red" : "black",
            };
          }}
          to="/artists"
        >
          <span>artists</span>
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "600" : "",
              color: isPending ? "red" : "black",
            };
          }}
          to="/albums"
        >
          <span>albums</span>
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "600" : "",
              color: isPending ? "red" : "black",
            };
          }}
          to="/songs"
        >
          <span>songs</span>
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "600" : "",
              color: isPending ? "red" : "black",
            };
          }}
          to="/playlists"
        >
          <span>playlists</span>
        </NavLink>
      </div>
    </header>
  );
}
