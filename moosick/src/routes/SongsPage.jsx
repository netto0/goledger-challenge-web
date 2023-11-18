import React, { useEffect, useState } from "react";
import styles from "./SongsPage.module.css"
import { getSongsService } from "../api/services/songServices";

export default function SongsPage() {
  const [songs, setSongs] = useState([]);

  const getSongs = async () => {
    const response = await getSongsService();
    setSongs(response);
  };
  
  useEffect(() => {
    getSongs()
  },[]);

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
                <h1>{song.artists[0].name}</h1>
              </div>
              <div>
                <span>ALBUM</span>
                <h1>{song.album.title}</h1>
              </div>
              <div>
                <span>EXPLICIT</span>
                <h1>{song.explicit ? "TRUE" : "FALSE"}</h1>
              </div>
              <button>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
