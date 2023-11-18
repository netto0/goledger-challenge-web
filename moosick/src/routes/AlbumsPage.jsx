import React, { useEffect, useState } from "react";
import styles from "./AlbumsPage.module.css";
import { getAlbumsService } from "../api/services/albumServices";
import { getArtistsService } from "../api/services/artistServices";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);


  const getAlbums = async () => {
    const response = await getAlbumsService();
    setAlbums(response);
  };

  const getArtists = async () => {
    const response = await getArtistsService()
    setArtists(response)
  }  
  
  useEffect(() => {
    getArtists()
    getAlbums();
  },[]);

  return (
    <div className={styles.artistPageContainer}>
      <div className={styles.listTitle}>
        {JSON.stringify(albums[0])}
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
                <h1>{album.artist.name}</h1>
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
