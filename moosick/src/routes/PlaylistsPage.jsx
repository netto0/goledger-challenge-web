import React, { useEffect, useState } from "react";
import styles from "./PlaylistsPage.module.css";
import { getSongsService } from "../api/services/songServices";
import { getPlaylistsService } from "../api/services/playlistServices";
import ListTitle from "../components/ListTitle";
import PlaylistCard from "../components/PlaylistCard";

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState([]);

  const getPlaylists = async () => {
    const response = await getPlaylistsService();
    setPlaylists(response);
  };

  useEffect(() => {
    getPlaylists();
  }, []);

  var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

  return (
    <div className={styles.playlistsPageContainer}>
      <ListTitle title="playlists" />
      <ul>
        {playlists.map((playlist, index) => {
          const songsNames = [];
          if (playlist.songs) {
            playlist.songs.map((song) => {
              songsNames.push(song.title);
            });
          }

          return (
            <PlaylistCard
              name={playlist.name}
              description={playlist.description}
              songs={songsNames}
            />
          );
        })}
      </ul>
    </div>
  );
}
