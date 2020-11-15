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

export { getUser };
