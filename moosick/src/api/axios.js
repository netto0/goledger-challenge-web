import axios from "axios";

const baseUrl = "http://ec2-54-87-223-191.compute-1.amazonaws.com/api";

const getItensByType = async (type) => {
  const response = await axios.post(`${baseUrl}/query/search`, {
    query: {
      selector: {
        "@assetType": type,
      },
    },
  });
  console.log(response.data.result);
  return response.data.result;
};

const getItensResolved = async (type) => {
  const response = await axios.post(`${baseUrl}/query/search`, {
    query: {
      selector: {
        "@assetType": type,
      },
    },
    resolve: true,
  });
  console.log(response.data.result);
  return response.data.result;
};

const deleteItem = async (type, key) => {
  try {
    const response = await axios.post(`${baseUrl}/invoke/deleteAsset`, {
      key: {
        "@assetType": type,
        "@key": key,
      },
    });
    console.log("SUCCESS");
  } catch (error) {
    console.log(error);
  }
};

getItensByType("album");

export { baseUrl, getItensByType, deleteItem, getItensResolved };
