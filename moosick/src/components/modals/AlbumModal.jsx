import React, { useEffect, useState } from "react";
import styles from "./AlbumModal.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { GlobalSettingsContext } from "../../providers/globalSettings";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { addAlbumService, editAlbumService } from "../../api/services/albumServices";
import Select from "react-select";

export default function AlbumModal({ albumKey, albumInfos }) {
  const { closeModal, getArtists, artists, getAlbums } = React.useContext(
    GlobalSettingsContext
  );
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [release, setRelease] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    var formatedDate = new Date(release);
    e.preventDefault();
    if (!albumInfos) {
      const response = await addAlbumService(
        title,
        artist,
        formatedDate,
        rating
      );
      closeModal();
      if (response == "SUCCESS") {
        toast.success("Album added successfully!", {
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
        console.log(response);
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
    } else {
      // const response = await editAlbumService(albumKey, moment(formatedDate).format(), rating);
      const response = await editAlbumService(albumKey, moment(release).format(), rating);
      closeModal();
      if (response == "SUCCESS") {
        toast.success("Album edited successfully!", {
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
        console.log(response)
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
    }
  };

  useEffect(() => {
    getArtists();
    if (albumInfos) {
      setTitle(albumInfos[0]);
      setArtist(albumInfos[1]);
      setRelease(albumInfos[2]);
      setRating(albumInfos[3]);
    }
  }, []);

  const artistsOptions = [];
  artists.map((artist) => {
    artistsOptions.push({ key: artist["@key"], name: artist["name"] });
  });

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          <BsFillPlusCircleFill />
        </button>
        <h1 className={styles.modalTitle}>
          {albumInfos ? "edit Album" : "add Album"}
        </h1>
        <form className={styles.modalForm} action="">
          <label className={styles.formLabel} htmlFor="">
            Title
          </label>
          <input
            className={styles.formInput}
            type="text"
            value={title}
            placeholder="Enter the album title..."
            onChange={(e) => setTitle(e.target.value)}
            readOnly={albumInfos}
          />
          <label className={styles.formLabel} htmlFor="">
            Artist
          </label>
          {!albumInfos ? (
            
            <select
              className={styles.formSelect}
              name="artist"
              onChange={(e) => setArtist(e.target.value)}
            >
              {artistsOptions.map((artist) => {
                return (
                  <option value={artist.key} key={artist.key}>
                    {artist.name}
                  </option>
                );
              })}
            </select>
          ) : (
            <input
              className={styles.formInput}
              type="text"
              value={artist}
              onChange={null}
              readOnly={albumInfos}
            />
          )}

          <label className={styles.formLabel} htmlFor="">
            Release
          </label>
          <input
            className={styles.formInput}
            type="date"
            value={release}
            onChange={(e) => setRelease(e.target.value)}
          />
          <label className={styles.formLabel} htmlFor="">
            Rating
          </label>
          <input
            className={styles.formInput}
            type="number"
            value={rating}
            placeholder="0-10"
            onChange={(e) => setRating(e.target.value)}
          />
          {/* <button className={styles.confirmButton}> */}
          <button className={styles.confirmButton} onClick={handleSubmit}>
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
