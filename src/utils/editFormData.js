/**
 * Set the user data to edit
 * @param {object} user
 * @returns An object with only the necessary data to edit
 */
function setUserDataToEdit(user) {
  return {
    name: user.name || "",
    lastname: user.lastname || "",
    biography: user.biography || "",
    birthday: user.birthday || "",
    location: user.location || "",
    website: user.website || "",
  };
}

export default setUserDataToEdit;