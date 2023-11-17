import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <NavLink className={styles.logoText} to="/" exact="true">
        <h1 >mooSick!</h1>
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
          artists
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
          albums
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
          songs
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
          playlists
        </NavLink>
      </div>
    </header>
  );
}
