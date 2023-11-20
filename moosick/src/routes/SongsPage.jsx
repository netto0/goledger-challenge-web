import React, { useEffect } from "react";
import styles from "./SongsPage.module.css";
import ListTitle from "../components/ListTitle";
import SongCard from "../components/SongCard";
import { GlobalSettingsContext } from "../providers/globalSettings";
import Loading from "../components/Loading";
import SongModal from "../components/modals/SongModal";

export default function SongsPage() {
  const { loading, getSongs, songs, setActiveModal } = React.useContext(GlobalSettingsContext);

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className={styles.songsPageContainer}>
      <ListTitle title="songs" btnFunction={() => setActiveModal(<SongModal />)}/>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {songs.map((song, index) => {
            const artistNames = [];
            song.artists.map((artist) => artistNames.push(artist.name));

            return (
              <li key={index}>
                <SongCard
                  songKey={song['@key']}
                  title={song.title}
                  artists={artistNames.join(", ")}
                  album={song.album.title}
                  explicit={song.explicit}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
