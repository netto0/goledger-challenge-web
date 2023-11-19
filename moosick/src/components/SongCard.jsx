import React from "react";
import styles from "./SongCard.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function SongCard({ key, title, artists, album, explicit }) {
  return (
    <li className={styles.artistCard}>
      <div className={styles.infoField}>
        <p>TITLE</p>
        <h1>{title}</h1>
      </div>
      <div className={styles.infoField}>
        <p>ARTISTS</p>
        <h1>{artists}</h1>
      </div>
      <div className={styles.infoField}>
        <p>ALBUM</p>
        <h1>{album}</h1>
      </div>
      <div className={styles.infoField}>
        <p>EXPLICIT</p>
        <h1>{explicit ? "YES" : "NO"}</h1>
      </div>
      <button><BsFillPlusCircleFill /></button>
    </li>
  );
}
