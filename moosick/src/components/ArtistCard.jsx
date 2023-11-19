import React from "react";
import styles from "./ArtistCard.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function ArtistCard({ artistKey, name, about }) {
  return (
    <li className={styles.artistCard}>
      <div>
        <h1>{name}</h1>
        <p>{about}</p>
      </div>
      <button>
        <BsFillPlusCircleFill />
      </button>
    </li>
  );
}
