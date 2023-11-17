import React from "react";
import styles from "./SongsPage.module.css"

import { GlobalSettingsContext } from "../providers/globalSettings";

export default function SongsPage() {
  const { songs } = React.useContext(GlobalSettingsContext);

  return (
    <div className={styles.songsPageContainer}>
      <div className={styles.listTitle}>
        <h1>songs</h1>
        <button>+</button>
      </div>
      <ul>
        {songs.map((song, index) => {
          return (
            <li className={styles.songListItem} key={index}>
              <div>
                <span>TITLE</span>
                <h1>{song.title}</h1>
              </div>
              <div>
                <span>ARTISTS</span>
                <h1>{JSON.stringify(song.artists)}</h1>
              </div>
              <div>
                <span>ALBUM</span>
                <h1>{song.albumKey}</h1>
              </div>
              <div>
                <span>EXPLICIT</span>
                <h1>{song.explicit}</h1>
              </div>
              <button>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
