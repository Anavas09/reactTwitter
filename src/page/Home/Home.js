import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

import TweetsList from "../../components/TweetsList";

import BasicLayout from "../../layouts/BasicLayout";

import { getTweetsFollowers } from "../../api/tweet";
import { formatTweet } from "../../utils/functions";

import "./Home.scss";

function Home() {
  const [tweets, setTweets] = useState(null);
  const [page, setPage] = useState(1);
  const [loadingTweets, setLoadingTweets] = useState(false);

  useEffect(() => {
    getTweetsFollowers(page).then(response => {
      console.log(response);
      if (!tweets) {
        setTweets(formatTweet(response));
      } else {
        if (!response) {
          setLoadingTweets(0);
        } else {
          const newTweets = formatTweet(response);
          setTweets([...tweets, ...newTweets]);
          setLoadingTweets(false);
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const moreTweets = () => {
    console.log("Loading");
    setLoadingTweets(true);
    setPage(page + 1);
  };

  return (
    <BasicLayout className="home">
      <div className="home__title">
        <h2>Home</h2>
      </div>
      {tweets && <TweetsList tweets={tweets} />}
      <Button onClick={moreTweets} className="load-more">
        {!loadingTweets ? (
          loadingTweets !== 0 && "More tweets"
        ) : (
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
      </Button>
    </BasicLayout>
  );
}

export default Home;
