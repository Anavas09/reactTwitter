import { API_HOST } from "../utils/constants";
import { getToken } from "./auth";

/**
 * Send request to the database with the user id
 * @param {string} userID
 * @returns All user data
 */
function getUser(userID) {
  const url = `${API_HOST}/getProfile?id=${userID}`;
  const token = getToken();

  //If the request is a GET type, isn't necessary write "method: GET"
  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(url, params)
    .then(response => {
      // eslint-disable-next-line no-throw-literal
      if (response.status >= 400) throw null;

      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

/**
 * Upload the banner to the database
 * @param {object} file JSON with the file info
 */
function uploadBanner(file) {
  const url = `${API_HOST}/uploadBanner`;
  const token = getToken();

  const formData = new FormData();

  formData.append("banner", file);

  //If the request is a GET type, isn't necessary write "method: GET"
  const params = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export { getUser, uploadBanner };
