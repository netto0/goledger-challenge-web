import { getItensByType } from "../axios.js";
import axios from "axios";
import { baseUrl } from "../axios.js";

const getArtistsService = async () => {
  try {
    const response = await getItensByType("artist");
    return response;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

const getArtistName = async (key) => {
  try {
    const response = await axios.post(`${baseUrl}/query/search`, {
      "query": {
        "selector": {
          "@assetType": "artist",
          "@key": key
        }
      }
    })
    console.log(response.data.result[0].name)
    return response.data.result[0].name
  } catch (error) {
    console.log(`ERROR: ${error}`)
  }
}

const addArtist = async (name, about) => {
  try {
    const response = await axios.post(`${baseUrl}/invoke/createAsset`, {
      asset: [
        {
          "@assetType": "artist",
          name: name,
          about: about,
        },
      ],
    });
    console.log("SUCCESS");
  } catch (error) {
    console.log(error.response);
  }
};

const editArtist = async (key, about) => {
  try {
    const response = await axios.post(`${baseUrl}/invoke/updateAsset`, {
      update: {
        "@assetType": "artist",
        "@key": key,
        about: about,
      },
    });
    console.log("SUCCESS");
  } catch (error) {
    console.log(error.response.status);
  }
};

// getArtists()

export { getArtistsService, getArtistName, addArtist, editArtist };
