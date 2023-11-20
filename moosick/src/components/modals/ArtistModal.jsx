import React, { useEffect, useState } from "react";
import styles from "./ArtistModal.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { GlobalSettingsContext } from "../../providers/globalSettings";
import {
  addArtistService,
  editArtistService,
} from "../../api/services/artistServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ArtistModal({ artistKey, artistInfos }) {
  const { closeModal, getArtists } = React.useContext(GlobalSettingsContext);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!artistInfos) {
      const response = await addArtistService(name, about);
      closeModal();
      if (response == "SUCCESS") {
        toast.success("Artist added successfully!", {
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
        toast.error("ERROR", {
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
    } else {
      const response = await editArtistService(artistKey, about);
      closeModal();
      if (response == "SUCCESS") {
        toast.success("Artist edited successfully!", {
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
        toast.error("ERROR", {
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
    }
  };

  useEffect(() => {
    if (artistInfos) {
      setName(artistInfos[0]);
      setAbout(artistInfos[1]);
    }
  }, []);

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          <BsFillPlusCircleFill />
        </button>
        <h1 className={styles.modalTitle}>
          {artistInfos ? "edit Artist" : "add Artist"}
        </h1>
        <form className={styles.modalForm} action="">
          <label className={styles.formLabel} htmlFor="">
            Name
          </label>
          <input
            className={styles.formInput}
            type="text"
            value={name}
            placeholder="Enter the artist name..."
            onChange={(e) => setName(e.target.value)}
            readOnly={artistInfos}
          />
          <label className={styles.formLabel} htmlFor="">
            About
          </label>
          <textarea
            className={styles.formInput}
            type="text"
            value={about}
            placeholder="Enter the artist about text..."
            onChange={(e) => setAbout(e.target.value)}
          />
          <button className={styles.confirmButton} onClick={handleSubmit}>
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
