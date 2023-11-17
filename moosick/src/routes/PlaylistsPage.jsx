import React from "react";
import styles from "./PlaylistsPage.module.css"
import { GlobalSettingsContext } from "../providers/globalSettings";

export default function PlaylistsPage() {
  const { playlists } = React.useContext(GlobalSettingsContext);

  return (
    <div className={styles.playlistsPageContainer}>
      <div className={styles.listTitle}>
        <h1>playlists</h1>
        <button>+</button>
      </div>
      <ul>
        {playlists.map((playlist, index) => {
          return (
            <li className={styles.playlistListItem} key={index}>
              <div>
                <span>NAME</span>
                <h1>{playlist.name}</h1>
              </div>
              <div>
                <span>DESCRIPTION</span>
                <h1>{playlist.description}</h1>
              </div>
              <div>
                <span>SONGS</span>
                <h1>{JSON.stringify(playlist.songs)}</h1>
              </div>
              <button>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
