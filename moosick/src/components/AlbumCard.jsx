import React from "react";
import styles from "./AlbumCard.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function AlbumCard({ key, title, artist, release, rating }) {
  return (
    <li className={styles.artistCard}>
      <div className={styles.infoField}>
        <p>TITLE</p>
        <h1>{title}</h1>
      </div>
      <div className={styles.infoField}>
        <p>ARTIST</p>
        <h1>{artist}</h1>
      </div>
      <div className={styles.infoField}>
        <p>RELEASE</p>
        <h1>{release}</h1>
      </div>
      <div className={styles.infoField}>
        <p>RATING</p>
        <h1>{rating}</h1>
      </div>
      <button><BsFillPlusCircleFill /></button>
    </li>
  );
}
