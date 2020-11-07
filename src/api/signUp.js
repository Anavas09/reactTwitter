const { API_HOST } = require("../utils/constants");

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

export { signUpApi };
