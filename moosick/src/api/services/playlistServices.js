import { getItensByType } from "../axios.js";
import axios from "axios";
import { baseUrl } from "../axios.js";

const getAllPlaylists = async () => {
  const response = await getItensByType("playlist");
  const playlistArray = [];
  response.forEach((playlist) => {
    playlistArray.push({
      key: playlist["@key"],
      name: playlist.name,
      description: playlist.description,
      songs: playlist.songs,
    });
  });
  return playlistArray;
};

const addPlaylist = async (name, description, songsArray) => {
  try {
    const response = await axios.post(`${baseUrl}/invoke/createAsset`, {
      asset: [
        {
          "@assetType": "playlist",
          description: description,
          name: name,
          songs: songsArray,
        },
      ],
    });
    console.log("SUCCESS");
  } catch (error) {
    console.log(error);
  }
};

const editPlaylist = async (key, description, songsArray) => {
  try {
    const response = await axios.put(`${baseUrl}/invoke/updateAsset`, {
      update: {
        "@assetType": "playlist",
        "@key": key,
        description: description,
        songs: songsArray,
      },
    });
    console.log("SUCCESS");
  } catch (error) {
    console.log(`ERRO: ${error}`);
  }
};

export { getAllPlaylists, addPlaylist, editPlaylist };
