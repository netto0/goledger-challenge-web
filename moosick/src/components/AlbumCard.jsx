import React from "react";
import styles from "./AlbumCard.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { GlobalSettingsContext } from "../providers/globalSettings";
import AlbumModal from "./modals/AlbumModal";
import moment from "moment";
import { deleteItem } from "../api/axios";
import { toast } from "react-toastify";

export default function AlbumCard({
  albumKey,
  title,
  artist,
  release,
  rating,
}) {
  const { setActiveModal, getAlbums } = React.useContext(GlobalSettingsContext);


  const deleteCard = async () => {
    const response = await deleteItem("album", albumKey);
    if (response == "SUCCESS") {
      toast.success("Album deleted successfully!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getAlbums();
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
            <AlbumModal
              albumKey={albumKey}
              albumInfos={[
                title,
                artist,
                moment(release).format("YYYY-MM-DD"),
                rating,
              ]}
            />
          )
        }
      >
        <div className={styles.infoField}>
          <p>TITLE</p>
          <h1>{title}</h1>
        </div>
        <div className={styles.infoField}>
          <p>ARTIST</p>
          <h1>{artist}</h1>
        </div>
        <div className={styles.infoField}>
          <p>RELEASE</p>
          <h1>{moment(release).format("MM/DD/YYYY")}</h1>
        </div>
        <div className={styles.infoField}>
          <p>RATING</p>
          <h1>{rating}</h1>
        </div>
      </div>
      <button onClick={() => deleteCard()}>
        <BsFillPlusCircleFill />
      </button>
    </div>
  );
}
