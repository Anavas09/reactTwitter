import { isEmpty } from "lodash";

/**
 * Check if a text has a link
 * @param {string} text Text to verify
 * @returns The same text with an 'a' tag if there are links.
 */
function replaceURLWithHTMLLinks(text) {
  // eslint-disable-next-line no-useless-escape
  const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  return text?.replace(exp, "<a href='$1' target='_blank'>$1</a>");
}

/**
 * Format the tweet object for grab only the necessary information
 * @param {Array} tweets
 * @returns Formatted tweets array
 */
function formatTweet(tweets) {
  const tweetsTemp = [];

  console.log(tweets);
  if (isEmpty(tweets)) {
    console.log(tweetsTemp);
    return tweetsTemp;
  }

  tweets.forEach(tweet => {
    tweetsTemp.push({
      _id: tweet._id,
      userId: tweet.userRelationId,
      message: tweet.Tweet.message,
      date: tweet.Tweet.date,
    });
  });

  console.log(tweetsTemp);
  return tweetsTemp;
}

export { formatTweet, replaceURLWithHTMLLinks };
