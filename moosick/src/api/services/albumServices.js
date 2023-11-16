import { getItensByType } from "../axios.js";
import axios from "axios";
import { baseUrl } from "../axios.js";

const getAlbums = async () => {
  try {
    const response = await getItensByType("album");
    const albumsList = [];
    response.forEach((album) => {
      albumsList.push({
        type: album["@assetType"],
        key: album["@key"],
        title: album.title,
        artistKey: album.artist["@key"],
        release: album.releaseDate,
        rating: album.rating,
      });
    });
    console.log(albumsList);
    return albumsList;
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
    console.log("SUCCESS");
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
    console.log("SUCCESS");
  } catch (error) {
    console.log(`ERRO: ${error}`);
  }
};

export { getAlbums, addAlbum, editAlbum };
