import axios from "axios";
import { getItensByType } from "../axios.js";
import { baseUrl } from "../axios.js";

const getAllSongs = async () => {
  try {
    const response = await getItensByType("song");
    const songsList = [];
    response.forEach((song) => {
      songsList.push({
        type: song["@assetType"],
        key: song["@key"],
        title: song.title,
        artists: song.artists,
        albumKey: song.album["@key"],
        explicit: song.explicit,
      });
    });
    console.log(songsList);
    return songsList;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

const getSongsByArtist = async (key) => {
  try {
    const response = await axios.post(`${baseUrl}/query/search`, {
      query: {
        selector: {
          "@assetType": "song",
          artists: [
            {
              "@assetType": "artist",
              "@key": key,
            },
          ],
        },
      },
    });
    console.log(response.data.result.length);
    return response.data.result.length;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

const addSong = async (title, albumKey, artistsArray, explicit) => {
  try {
    const response = await axios.post(`${baseUrl}/invoke/createAsset`, {
      asset: [
        {
          "@assetType": "song",
          album: {
            "@assetType": "album",
            "@key": albumKey,
          },
          artists: artistsArray,
          explicit: explicit,
          title: title,
        },
      ],
    });
    console.log("SUCCESS");
  } catch (error) {
    console.log(error);
  }
};

const editSong = async (key, albumKey, explicit) => {
  try {
    const response = await axios.put(`${baseUrl}/invoke/updateAsset`, {
      update: {
        "@assetType": "song",
        "@key": key,
        album: {
          "@key": albumKey,
        },
        explicit: explicit,
      },
    });
    console.log("SUCCESS");
  } catch (error) {
    console.log(`ERRO: ${error}`);
  }
};

export { getAllSongs, getSongsByArtist, addSong, editSong };
