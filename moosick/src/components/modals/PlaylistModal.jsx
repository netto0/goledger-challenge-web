import React, { useEffect, useState } from "react";
import styles from "./PlaylistModal.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { GlobalSettingsContext } from "../../providers/globalSettings";
import { toast } from "react-toastify";
import Select from "react-select";
import "react-toastify/dist/ReactToastify.css";

import {
  addPlaylistService,
  editPlaylistService,
} from "../../api/services/playlistServices";

export default function PlaylistModal({ playlistKey, playlistInfos }) {
  const {
    closeModal,
    getArtists,
    getAlbums,
    artists,
    albums,
    getSongs,
    songs,
    getPlaylists,
  } = React.useContext(GlobalSettingsContext);
  const [name, setName] = useState("");
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [description, setDescription] = useState("");

  const formatedSongs = [];
  
 

  const handleChange = (selectedOption) => {
    setPlaylistSongs(selectedOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 playlistSongs?.map((song) => {
    formatedSongs.push({
      "@assetType": "song",
      "@key": song.value,
    });
  });

    if (!playlistInfos) {
      const response = await addPlaylistService(
        name,
        description,
        formatedSongs
      );
      closeModal();
      if (response == "SUCCESS") {
        toast.success("Playlist created successfully!", {
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
      const response = await editPlaylistService(
        playlistKey,
        description,
        formatedSongs
      );
      closeModal();
      if (response == "SUCCESS") {
        toast.success("Playlist edited successfully!", {
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
    getSongs();
    if (playlistInfos) {
      setName(playlistInfos[0]);
      setDescription(playlistInfos[1]);
    }
  }, []);

  const albumsOptions = [];
  const songsOptions = [];

  albums.map((album) => {
    albumsOptions.push({ key: album["@key"], title: album["title"] });
  });

  songs.map((song) => {
    songsOptions.push({ value: song["@key"], label: song["title"] });
  });

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          <BsFillPlusCircleFill />
        </button>
        <h1 className={styles.modalTitle}>
          {playlistInfos ? "edit Playlist" : "add Playlist"}
        </h1>
        <form className={styles.modalForm} action="">
          <label className={styles.formLabel} htmlFor="">
            Name
          </label>
          <input
            className={styles.formInput}
            type="text"
            value={name}
            placeholder="Enter the playlist name..."
            onChange={(e) => setName(e.target.value)}
            readOnly={playlistInfos}
          />
          <label className={styles.formLabel} htmlFor="">
            Songs
          </label>

          <Select
            isMulti
            name="playlistSongs"
            options={songsOptions}
            className={styles.multiSelect}
            classNamePrefix="select"
            onChange={handleChange}
          />

          <label className={styles.formLabel} htmlFor="">
            Description
          </label>
          <textarea
            className={styles.formInput}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the playlist description..."
          />
          <button className={styles.confirmButton} onClick={handleSubmit}>
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
