import React from "react";
import styles from "./AlbumsPage.module.css";
import { GlobalSettingsContext } from "../providers/globalSettings";

export default function AlbumsPage() {
  const { artists, albums } = React.useContext(GlobalSettingsContext);

  return (
    <div className={styles.artistPageContainer}>
      <div className={styles.listTitle}>
        {JSON.stringify(artists)}
        <h1>albums</h1>
        <button>+</button>
      </div>
      <ul>
        {albums.map((album, index) => {
          return (
            <li className={styles.albumListItem} key={index}>
              <div>
                <span>TITLE</span>
                <h1>{album.title}</h1>
              </div>
              <div>
                <span>ARTIST</span>
                <h1>{album.artistKey}</h1>
              </div>
              <div>
                <span>RELEASE</span>
                <h1>{album.release}</h1>
              </div>
              <div>
                <span>RATING</span>
                <h1>{album.rating}</h1>
              </div>
              <button>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
