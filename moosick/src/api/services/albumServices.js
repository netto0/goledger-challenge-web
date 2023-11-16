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
      const response = await axios.post(`${baseUrl}/invoke/updateAsset`, {
        update: {
          "@assetType": "album",
          "@key": key,
          title: title,
          artist: artist,
          releaseDate: release,
          rating: rating
        },
      });
      console.log("SUCCESS");
    } catch (error) {
      console.log(error.response.status);
    }
  };


editAlbum("album:0cf1210d-94b2-5b19-ac09-f0368d768bc4","Ventura Alterado", "Artistas Alterados","1111-11-11T03:00:00Z",1)
export { getAlbums, addAlbum, editAlbum };
