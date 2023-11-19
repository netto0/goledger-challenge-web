import { getItensByType, getItensResolved } from "../axios.js";
import axios from "axios";
import { baseUrl } from "../axios.js";

const getPlaylistsService = async () => {
  const response = await getItensResolved("playlist");
  return response;
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
  } catch (error) {
    console.log(`ERRO: ${error}`);
  }
};


getPlaylistsService()
export { getPlaylistsService, addPlaylist, editPlaylist };
