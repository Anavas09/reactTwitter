/**
 * Check if an email is valid
 * 
 * @param {string} email Email to check
 * @returns True, if the email is valid, else, false.
 */
 function isEmailValid(email) {
  // eslint-disable-next-line no-useless-escape
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailValid.test(String(email).toLowerCase());
}

export {
  isEmailValid
}