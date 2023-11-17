import React, { useEffect, useState } from "react";
import { getArtists } from '../api/services/artistServices'
import { getAlbums } from '../api/services/albumServices'
import { getAllSongs } from "../api/services/songServices";
import { getAllPlaylists } from "../api/services/playlistServices";

export const GlobalSettingsContext = React.createContext({});

export const GlobalSettingsProvider = (props) => {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const giveAllArtists = async () => {
    const artistsList = await getArtists();
    setArtists(artistsList);
  };

  const giveAllAlbums = async () => {
    const albumsList = await getAlbums();
    setAlbums(albumsList);
  };

  const giveAllSongs = async () => {
    const songsList = await getAllSongs();
    setSongs(songsList);
  };

  const giveAllPlaylists = async () => {
    const playlistsArray = await getAllPlaylists();
    setPlaylists(playlistsArray);
  };

  useEffect(() => {
    giveAllArtists();
    giveAllAlbums();
    giveAllSongs();
    giveAllPlaylists();
  }, []);

  return (
    <GlobalSettingsContext.Provider
      value={{
        artists,
        albums,
        songs,
        playlists,
      }}
    >
      {props.children}
    </GlobalSettingsContext.Provider>
  );
};
