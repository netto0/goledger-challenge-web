import React, { useEffect, useState } from "react";
import styles from "./AlbumsPage.module.css";
import { getAlbumsService } from "../api/services/albumServices";
import { getArtistsService } from "../api/services/artistServices";
import ListTitle from "../components/ListTitle";
import AlbumCard from "../components/AlbumCard";
import moment from 'moment'

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);

  const getAlbums = async () => {
    const response = await getAlbumsService();
    setAlbums(response);
  };

  const getArtists = async () => {
    const response = await getArtistsService();
    setArtists(response);
  };

  useEffect(() => {
    getArtists();
    getAlbums();
  }, []);

  return (
    <div className={styles.artistPageContainer}>
      <ListTitle title="albums" />
      <ul>
        {albums.map((album, index) => {
          return (
            <AlbumCard
              title={album.title}
              artist={album.artist.name}
              release={moment(album.releaseDate).format("MM/DD/YYYY")}
              rating={album.rating}
            />
          );
        })}
      </ul>
    </div>
  );
}
