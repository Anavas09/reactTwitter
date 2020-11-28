import { API_HOST } from "../utils/constants";
import { getToken } from "./auth";

/**
 * Add a tweet to the database
 * @param {string} message String with the message
 */
function addTweet(message) {
  const url = `${API_HOST}/tweet`;
  const token = getToken();

  const data = {
    message,
  };

  //If the request is a GET type, isn't necessary write "method: GET"
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return { code: response.status, message: "Tweet sended." };
      }
      return { code: 500, message: "Server error." };
    })
    .catch(err => {
      return err;
    });
}

export { addTweet };
