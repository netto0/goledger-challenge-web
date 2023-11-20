import React, { useEffect, useState } from "react";
import styles from "./ArtistsPage.module.css";
import ListTitle from "../components/ListTitle";
import ArtistCard from "../components/ArtistCard";
import { GlobalSettingsContext } from "../providers/globalSettings";
import Loading from "../components/Loading";
import ArtistModal from "../components/modals/ArtistModal";

export default function ArtistsPage() {
  const { setActiveModal, artists, getArtists, loading } = React.useContext(
    GlobalSettingsContext
  );

  useEffect(() => {
    getArtists();
  }, []);
  
  return (
    <div className={styles.artistPageContainer}>
      <ListTitle title="artists" btnFunction={() => setActiveModal(<ArtistModal />)} />

      {loading ? (
        <Loading />
      ) : (
        <ul className={styles.artistUl}>
          {artists.map((artist, index) => {
            return (
              <li key={index}>
                <ArtistCard
                  artistKey={artist["@key"]}
                  name={artist.name}
                  about={artist.about}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
