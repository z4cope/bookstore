import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iqvGBsJ72bLYceNdkDo2/books';

export const postRequest = async (data = {}) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const getRequset = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteRequest = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
