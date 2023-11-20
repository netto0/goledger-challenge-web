import React, { useEffect } from "react";
import styles from "./PlaylistsPage.module.css";
import ListTitle from "../components/ListTitle";
import PlaylistCard from "../components/PlaylistCard";
import { GlobalSettingsContext } from "../providers/globalSettings";
import Loading from "../components/Loading";
import PlaylistModal from "../components/modals/PlaylistModal";

export default function PlaylistsPage() {
  const { loading, getPlaylists, playlists, setActiveModal } = React.useContext(
    GlobalSettingsContext
  );
  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <div className={styles.playlistsPageContainer}>
      <ListTitle title="playlists" btnFunction={() => setActiveModal(<PlaylistModal />)}/>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {playlists.map((playlist, index) => {
            const songsNames = [];
            if (playlist.songs) {
              playlist.songs.map((song) => {
                songsNames.push(song.title);
              });
            }

            return (
              <li key={index}>
                <PlaylistCard
                  playlistKey={playlist['@key']}
                  name={playlist.name}
                  description={playlist.description}
                  songs={songsNames}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
