import React, { useEffect, useState } from "react";
import styles from "./ArtistsPage.module.css";
import { getArtistsService } from "../api/services/artistServices";

export default function ArtistsPage() {
  const [artists, setArtists] = useState([])

  const getArtists = async () => {
    const response = await getArtistsService()
    setArtists(response)
  }

  useEffect(() => {
    getArtists()
  },[])

  return (
    <div className={styles.artistPageContainer}>
      <div className={styles.listTitle}>
        {/* {JSON.stringify(artists)} */}
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
