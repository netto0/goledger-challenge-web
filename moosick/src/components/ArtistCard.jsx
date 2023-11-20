import React from "react";
import styles from "./ArtistCard.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { GlobalSettingsContext } from "../providers/globalSettings";
import ArtistModal from "./modals/ArtistModal";
import { deleteItem } from "../api/axios";
import { toast } from "react-toastify";

export default function ArtistCard({ artistKey, name, about }) {
  const { setActiveModal, getArtists } = React.useContext(
    GlobalSettingsContext
  );

  const deleteCard = async () => {
    const response = await deleteItem("artist", artistKey);
    if (response == "SUCCESS") {
      toast.success("Artist deleted successfully!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getArtists();
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
    <div key="test" className={styles.artistCard}>
      <div
        className={styles.artistInfos}
        onClick={() =>
          setActiveModal(
            <ArtistModal artistKey={artistKey} artistInfos={[name, about]} />
          )
        }
      >
        <h1>{name}</h1>
        <p>{about}</p>
      </div>
      <button onClick={() => deleteCard()}>
        <BsFillPlusCircleFill />
      </button>
    </div>
  );
}
