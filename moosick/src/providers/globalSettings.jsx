import React, { useState } from "react";
import { getArtistsService } from "../api/services/artistServices";
import { getAlbumsService } from "../api/services/albumServices";
import { getSongsService } from "../api/services/songServices";
import { getPlaylistsService } from "../api/services/playlistServices";

export const GlobalSettingsContext = React.createContext({});

export const GlobalSettingsProvider = (props) => {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    setActiveModal(null);
  };

  const getArtists = async () => {
    setLoading(true);
    const response = await getArtistsService();
    setArtists(response);
    setLoading(false);
  };

  const getAlbums = async () => {
    setLoading(true);
    const response = await getAlbumsService();
    setAlbums(response);
    setLoading(false);
  };
  
  const getSongs = async () => {
    setLoading(true);
    const response = await getSongsService();
    setSongs(response);
    setLoading(false);
  };

  const getPlaylists = async () => {
    setLoading(true);
    const response = await getPlaylistsService();
    setPlaylists(response);
    setLoading(false);
  };

  return (
    <GlobalSettingsContext.Provider
      value={{
        activeModal,
        setActiveModal,
        closeModal,
        artists,
        getArtists,
        loading,
        setLoading,
        getAlbums,
        albums,
        songs,
        getSongs,
        getPlaylists,
        playlists
      }}
    >
      {props.children}
    </GlobalSettingsContext.Provider>
  );
};
