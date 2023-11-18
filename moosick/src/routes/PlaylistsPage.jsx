import React, { useEffect, useState } from "react";
import styles from "./PlaylistsPage.module.css";
import { getSongsService } from "../api/services/songServices";
import { getPlaylistsService } from "../api/services/playlistServices";

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState([]);

  const getPlaylists = async () => {
    const response = await getPlaylistsService();
    setPlaylists(response);
  };

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <div className={styles.playlistsPageContainer}>
      <div className={styles.listTitle}>
        {/* {JSON.stringify(playlists[0].songs)} */}
        <h1>playlists</h1>
        <button>+</button>
      </div>
      <ul>
        {playlists.map((playlist, index) => {
          const songsNames = [];
          // playlist.songs.map((song) => {
          //   songsNames.push(song.title)
          // })

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
                {/* <h1>{JSON.stringify(songsNames)}</h1> */}
              </div>
              <button>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
