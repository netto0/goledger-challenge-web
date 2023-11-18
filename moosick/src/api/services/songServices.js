import axios from "axios";
import { getItensByType, getItensResolved } from "../axios.js";
import { baseUrl } from "../axios.js";

// const getSongsService = async () => {
//   try {
//     const response = await getItensByType("song");
//     return response;
//   } catch (error) {
//     console.log(`ERROR: ${error}`);
//   }
// };

const getSongsService = async () => {
  try {
    const response = await getItensResolved("song");
    return response;
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

export { getSongsService, getSongsByArtist, addSong, editSong };
