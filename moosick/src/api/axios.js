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
    return "SUCCESS"
  } catch (error) {
    return(error.response.data);
  }
};

export { baseUrl, getItensByType, deleteItem, getItensResolved };
