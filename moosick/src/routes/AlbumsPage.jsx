import React, { useEffect, useState } from "react";
import styles from "./AlbumsPage.module.css";
import { getAlbumsService } from "../api/services/albumServices";
import { getArtistsService } from "../api/services/artistServices";
import ListTitle from "../components/ListTitle";
import AlbumCard from "../components/AlbumCard";
import moment from "moment";
import { GlobalSettingsContext } from "../providers/globalSettings";
import Loading from "../components/Loading";
import AlbumModal from "../components/modals/AlbumModal";

export default function AlbumsPage() {
  const { loading, getAlbums, albums, setActiveModal } = React.useContext(
    GlobalSettingsContext
  );

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div className={styles.artistPageContainer}>
      <ListTitle title="albums" btnFunction={() => setActiveModal(<AlbumModal />)}/>

      {loading ? (
        <Loading />
      ) : (
        <ul>
        {albums.map((album, index) => {
          return (
            <li key={index}>
              <AlbumCard
                albumKey={album['@key']}
                title={album.title}
                artist={album.artist.name}
                release={album.releaseDate}
                rating={album.rating}
              />
            </li>
          );
        })}
      </ul>
      )}

      
    </div>
  );
}
