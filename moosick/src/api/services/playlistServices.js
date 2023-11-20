import { getItensByType, getItensResolved } from "../axios.js";
import axios from "axios";
import { baseUrl } from "../axios.js";

const getPlaylistsService = async () => {
  const response = await getItensResolved("playlist");
  return response;
};

const addPlaylistService = async (name, description, songsArray) => {
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
    return "SUCCESS";
  } catch (error) {
    return error.response.data;
  }
};

const editPlaylistService = async (key, description, songsArray) => {
  try {
    const response = await axios.put(`${baseUrl}/invoke/updateAsset`, {
      update: {
        "@assetType": "playlist",
        "@key": key,
        description: description,
        songs: songsArray,
      },
    });
    return "SUCCESS";
  } catch (error) {
    return error.response.data;
  }
};

export { getPlaylistsService, addPlaylistService, editPlaylistService };
