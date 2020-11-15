import jwtDecode from "jwt-decode";
const { API_HOST, TOKEN } = require("../utils/constants");

/**
 * Register an user to the database
 * @param {object} user
 */
function signUpApi(user) {
  console.log(user);

  const uri = `${API_HOST}/register`;
  console.log(uri);

  const userToDB = {
    ...user,
    email: user.email.toLowerCase(),
    birthday: new Date(),
  };

  delete userToDB.confirmPassword;

  console.log(userToDB);

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userToDB),
  };

  return fetch(uri, params)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return {
        code: 404,
        message: "Email is already in use. Chose another one",
      };
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

/**
 * Get the user data for login in the app
 * @param {object} data
 * @return A JSON Web Token with the user data
 */
function signInApi(data) {
  console.log(data);

  const uri = `${API_HOST}/login`;
  console.log(uri);

  const userData = {
    ...data,
    email: data.email.toLowerCase(),
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetch(uri, params)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return {
        code: 404,
        message: "Wrong Email or Password ",
      };
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

/**
 * Set token to the local storage
 * @param {string} token
 */
function setTokenApi(token) {
  window.localStorage.setItem(TOKEN, token);
}

/**Get token from local storage*/
function getToken() {
  return window.localStorage.getItem(TOKEN);
}

/**Remove the token from local storage*/
function logout() {
  window.localStorage.removeItem(TOKEN);
}

/**
 * Check if an user is logged
 * @returns Return a null value if the user isn't logged. Otherwise, return an object with user data
 */
function isUserLogged() {
  const token = getToken();

  if (!token) {
    logout();
    return null;
  }

  if (isTokenExpired(token)) {
    logout();
  }

  return {...jwtDecode(token)}
}

/**
 * Check if the token is expired
 * @param {string} token
 * @returns True if the token is expired, else, false.
 */
function isTokenExpired(token) {
  const { exp } = jwtDecode(token);
  const expire = exp * 1000;
  const timeout = expire - Date.now();

  if (timeout <= 0) {
    return true;
  }
  return false;
}

export { getToken, isUserLogged, logout, signInApi, setTokenApi, signUpApi };
