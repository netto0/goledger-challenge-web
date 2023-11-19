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

const addAlbum = async (title, artistKey, release, rating) => {
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
  } catch (error) {
    console.log(error);
  }
};

const editAlbum = async (key, release, rating) => {
  try {
    const response = await axios.put(`${baseUrl}/invoke/updateAsset`, {
      update: {
        "@assetType": "album",
        "@key": key,
        releaseDate: release,
        rating: rating,
      },
    });
  } catch (error) {
    console.log(`ERRO: ${error}`);
  }
};

getAlbumsService()
export { getAlbumsService, addAlbum, editAlbum };
