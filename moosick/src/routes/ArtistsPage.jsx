import React, { useEffect, useState } from "react";
import styles from "./ArtistsPage.module.css";
import { getArtistsService } from "../api/services/artistServices";
import ListTitle from "../components/ListTitle";
import ArtistCard from "../components/ArtistCard";

export default function ArtistsPage() {
  const [artists, setArtists] = useState([]);

  const getArtists = async () => {
    const response = await getArtistsService();
    setArtists(response);
  };

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <div className={styles.artistPageContainer}>
      <ListTitle title="artists" />
      <ul className={styles.artistUl}>
        {artists.map((artist, index) => {
          return (
            <ArtistCard
              artistKey={artist["@key"]}
              name={artist.name}
              about={artist.about}
            />
          );
        })}
      </ul>
    </div>
  );
}
