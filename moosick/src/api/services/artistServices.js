import { getItensByType } from "../axios.js";
import axios from "axios";
import { baseUrl } from "../axios.js";

const getArtists = async () => {
  try {
    const response = await getItensByType("artist");
    const artistsList = [];
    response.forEach((artist) => {
      artistsList.push({
        type: artist["@assetType"],
        key: artist["@key"],
        name: artist.name,
        about: artist.about,
      });
    });
    console.log(artistsList);
    return artistsList;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

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

export { getArtists, addArtist, editArtist };
