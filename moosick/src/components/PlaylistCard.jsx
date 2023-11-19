import React from "react";
import styles from "./PlaylistCard.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function PlaylistCard({ key, name, description, songs }) {
  return (
    <li className={styles.artistCard}>
      <div className={styles.infoField}>
        <p>NAME</p>
        <h1>{name}</h1>
      </div>
      <div className={styles.infoField}>
        <p>DESCRIPTION</p>
        <h1>{description}</h1>
      </div>
      <div className={styles.infoField}>
        <p>SONGS</p>
        <h1>{songs.length > 0 ? songs.join(', ') : "-PLAYLIST VAZIA-"}</h1>
      </div>
      <button><BsFillPlusCircleFill /></button>
    </li>
  );
}
