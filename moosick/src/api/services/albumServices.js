import { getItensByType, getItensResolved } from "../axios.js";
import axios from "axios";
import { baseUrl } from "../axios.js";

const getAlbumsService = async () => {
  try {
    const response = await getItensResolved("album");
    return response;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

const addAlbumService = async (title, artistKey, release, rating) => {
  try {
    const response = await axios.post(`${baseUrl}/invoke/createAsset`, {
      asset: [
        {
          "@assetType": "album",
          artist: {
            "@assetType": "artist",
            "@key": artistKey,
          },
          rating: rating,
          releaseDate: release,
          title: title,
        },
      ],
    });
    return "SUCCESS";
  } catch (error) {
    return error.response.data;
  }
};

const editAlbumService = async (key, release, rating) => {
  try {
    const response = await axios.put(`${baseUrl}/invoke/updateAsset`, {
      update: {
        "@assetType": "album",
        "@key": key,
        releaseDate: release,
        rating: rating,
      },
    });
    return "SUCCESS";
  } catch (error) {
    return error.response.data;
  }
};

export { getAlbumsService, addAlbumService, editAlbumService };
