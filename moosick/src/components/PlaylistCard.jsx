import React from "react";
import styles from "./PlaylistCard.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { deleteItem } from "../api/axios";
import { toast } from "react-toastify";
import { GlobalSettingsContext } from "../providers/globalSettings";
import PlaylistModal from "./modals/PlaylistModal";

export default function PlaylistCard({ playlistKey, name, plSongs, description }) {
  const { setActiveModal, getPlaylists, songs } = React.useContext(
    GlobalSettingsContext
  );

  const deleteCard = async () => {
    const response = await deleteItem("playlist", playlistKey);
    if (response == "SUCCESS") {
      toast.success("Playlist deleted successfully!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getPlaylists();
    } else {
      toast.error(response, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className={styles.artistCard}>
      <div
        className={styles.artistInfos}
        onClick={() =>
          setActiveModal(
            <PlaylistModal
            playlistKey={playlistKey}
            playlistInfos={[name, description, songs]}
            />
            )
          }
          >
        {/* {JSON.stringify(plSongs)} */}
        <div className={styles.infoField}>
          <p>NAME</p>
          <h1>{name}</h1>
        </div>
        <div className={styles.infoField}>
          <p>DESCRIPTION</p>
          <h1>{description}</h1>
        </div>
        <div className={styles.infoField}>
          <p>SONGS</p>
          <h1>{plSongs.length > 0 ? plSongs.join(", ") : "-PLAYLIST VAZIA-"}</h1>
        </div>
      </div>
      <button onClick={() => deleteCard()}>
        <BsFillPlusCircleFill />
      </button>
    </div>
  );
}
