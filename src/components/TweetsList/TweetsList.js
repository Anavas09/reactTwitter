import React from "react";
import PropTypes from "prop-types";
import { map } from "lodash";

import Tweet from "../Tweet";

import "./TweetsList.scss";

function TweetsList({ tweets }) {
  return (
    <div className="tweets-list">
      {map(tweets, (tweet, index) => {
        return <Tweet key={index} tweet={tweet}/>
      })}
    </div>
  );
}

TweetsList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object,).isRequired,
};

export default TweetsList;
