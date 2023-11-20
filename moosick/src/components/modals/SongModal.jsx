import React, { useEffect, useState } from "react";
import styles from "./SongModal.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { GlobalSettingsContext } from "../../providers/globalSettings";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  addSongService,
  editSongService,
} from "../../api/services/songServices";

export default function SongModal({ songKey, songInfos }) {
  const { closeModal, getArtists, getAlbums, artists, albums, getSongs } =
    React.useContext(GlobalSettingsContext);
  const [title, setTitle] = useState("");
  const [songArtists, setSongArtists] = useState("");
  const [album, setAlbum] = useState("");
  const [explicit, setExplicit] = useState(false);

  var formatedArtists = [
    {
      "@assetType": "artist",
      "@key": songArtists,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!songInfos) {
      const response = await addSongService(
        title,
        album,
        formatedArtists,
        explicit
      );
      closeModal();
      if (response == "SUCCESS") {
        toast.success("Song added successfully!", {
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
      const response = await editSongService(songKey, album, explicit);
      closeModal();
      if (response == "SUCCESS") {
        toast.success("Song edited successfully!", {
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
    }
  };

  useEffect(() => {
    getArtists();
    getAlbums();
    if (songInfos) {
      setTitle(songInfos[0]);
      setSongArtists(songInfos[1]);
      setAlbum(songInfos[2]);
      setExplicit(songInfos[3]);
    }
  }, []);

  const artistsOptions = [];
  const albumsOptions = [];
  artists.map((artist) => {
    artistsOptions.push({ key: artist["@key"], name: artist["name"] });
  });

  albums.map((album) => {
    albumsOptions.push({ key: album["@key"], title: album["title"] });
  });

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          <BsFillPlusCircleFill />
        </button>
        <h1 className={styles.modalTitle}>
          {songInfos ? "edit Song" : "add Song"}
        </h1>
        <form className={styles.modalForm} action="">
          <label className={styles.formLabel} htmlFor="">
            Title
          </label>
          <input
            className={styles.formInput}
            type="text"
            value={title}
            placeholder="Enter the song title..."
            onChange={(e) => setTitle(e.target.value)}
            readOnly={songInfos}
          />
          <label className={styles.formLabel} htmlFor="">
            Artist
          </label>
          {!songInfos ? (
            <select
              className={styles.formSelect}
              name="artist"
              onChange={(e) => setSongArtists(e.target.value)}
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
              value={songArtists}
              onChange={null}
              readOnly={songInfos}
            />
          )}

          <label className={styles.formLabel} htmlFor="">
            Album
          </label>
          <select
            className={styles.formSelect}
            name="album"
            onChange={(e) => setAlbum(e.target.value)}
          >
            {albumsOptions.map((album) => {
              return (
                <option value={album.key} key={album.key}>
                  {album.title}
                </option>
              );
            })}
          </select>
          <div className={styles.checkBoxField}>
            <input
              type="checkbox"
              id="explicitCheck"
              onChange={(e) => setExplicit(!explicit)}
            />
            <label htmlFor="explicitCheck">Explicit</label>
          </div>
          <button className={styles.confirmButton} onClick={handleSubmit}>
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
