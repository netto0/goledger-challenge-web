import React, { useEffect, useState } from "react";
import styles from "./SongsPage.module.css";
import { getSongsService } from "../api/services/songServices";
import ListTitle from "../components/ListTitle";
import SongCard from "../components/SongCard";

export default function SongsPage() {
  const [songs, setSongs] = useState([]);

  const getSongs = async () => {
    const response = await getSongsService();
    setSongs(response);
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className={styles.songsPageContainer}>
      <ListTitle title="songs" />
      <ul>
        {songs.map((song, index) => {
          const artistNames = []
          song.artists.map(artist => artistNames.push(artist.name))

          return (
            <SongCard
              title={song.title}
              artists={artistNames.join(', ')}
              album={song.album.title}
              explicit={song.explicit}
            />
          );
        })}
      </ul>
    </div>
  );
}
