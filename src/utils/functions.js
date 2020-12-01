/**
 * Check if a text has a link
 * @param {string} text Text to verify
 * @returns The same text with an 'a' tag if there are links.
 */
function replaceURLWithHTMLLinks(text) {
  const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  return text?.replace(exp, "<a href='$1' target='_blank'>$1</a>");
}

export { replaceURLWithHTMLLinks };
