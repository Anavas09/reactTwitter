import { API_HOST } from "../utils/constants";
import { getToken } from "./auth";

/**
 * Check if follow an user
 * @param {string} userID ID from the user who want to know if follow
 */
function checkFollow(userID) {
  const url = `${API_HOST}/getRelation?id=${userID}`;
  const token = getToken();

  const params = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
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

/**
 * Follow an user
 * @param {string} userID ID from the user who want to follow
 */
function followUser(userID) {
  const url = `${API_HOST}/addRelation?id=${userID}`;
  const token = getToken();

  const params = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
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

/**
 * Unfollow an user
 * @param {string} userID ID from the user who want to unfollow
 */
function unfollowUser(userID) {
  const url = `${API_HOST}/deleteRelation?id=${userID}`;
  const token = getToken();

  const params = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
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

/**
 * Get a users list from the database
 * @param {string} urlParams Params to build the URL. (page, type and search)
 */
function getFollow(urlParams) {
  const url = `${API_HOST}/listUsers?${urlParams}`;
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
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}


export { checkFollow, getFollow, followUser, unfollowUser }