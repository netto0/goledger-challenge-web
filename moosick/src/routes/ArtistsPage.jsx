import React from "react";
import styles from "./ArtistsPage.module.css";
import { GlobalSettingsContext } from "../providers/globalSettings";

export default function ArtistsPage() {
  const { artists } = React.useContext(GlobalSettingsContext);

  return (
    <div className={styles.artistPageContainer}>
      <div className={styles.listTitle}>
        <h1>artists</h1>
        <button>+</button>
      </div>
      <ul>
        {artists.map((artist, index) => {
          return (
            <li className={styles.artistListItem} key={index}>
              <div>
                <h1>{artist.name}</h1>
                <p>{artist.about}</p>
              </div>
              <button>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
