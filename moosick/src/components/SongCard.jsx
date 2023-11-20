import React from "react";
import styles from "./SongCard.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import SongModal from "./modals/SongModal";
import { GlobalSettingsContext } from "../providers/globalSettings";
import { deleteItem } from "../api/axios";
import { toast } from "react-toastify";

export default function SongCard({ songKey, title, artists, album, explicit }) {

  const { setActiveModal, getSongs } = React.useContext(GlobalSettingsContext);
  
  const deleteCard = async () => {
    const response = await deleteItem("song", songKey);
    if (response == "SUCCESS") {
      toast.success("Song deleted successfully!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getSongs();
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
      <div className={styles.artistInfos} onClick={() =>
          setActiveModal(
            <SongModal
              songKey={songKey}
              songInfos={[
                title,
                artists,
                album,
                explicit,
              ]}
            />
          )
        }>
        <div className={styles.infoField} >
          <p>TITLE</p>
          <h1>{title}</h1>
        </div>
        <div className={styles.infoField}>
          <p>ARTISTS</p>
          <h1>{artists}</h1>
        </div>
        <div className={styles.infoField}>
          <p>ALBUM</p>
          <h1>{album}</h1>
        </div>
        <div className={styles.infoField}>
          <p>EXPLICIT</p>
          <h1>{explicit ? "YES" : "NO"}</h1>
        </div>
      </div>
      <button onClick={() => deleteCard()}>
        <BsFillPlusCircleFill />
      </button>
    </div>
  );
}
