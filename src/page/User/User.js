import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

import BannerAvatar from "../../components/User/BannerAvatar";
import UserInfo from "../../components/User/UserInfo";

import BasicLayout from "../../layouts/BasicLayout";

import { getUser } from "../../api/user";
import { getTweets } from "../../api/tweet";

import "./User.scss";
import TweetsList from "../../components/TweetsList/TweetsList";

function User(props) {
  const [userData, setUserData] = useState(null);
  const [tweets, setTweets] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadingTweets, setLoadingTweets] = useState(false);
  const { match } = props;
  const userID = match.params.id;

  console.log(tweets);

  useEffect(() => {
    getUser(userID)
      .then(res => {
        if (!res) toast.error("User not exist");
        setUserData(res);
      })
      .catch(() => toast.error("User not exist"));
  }, [userID]);

  useEffect(() => {
    getTweets(userID, 1)
      .then(res => {
        setTweets(res);
      })
      .catch(() => {
        setTweets([]);
      });
  }, [userID]);

  const moreTweets = () => {
    const pageTemp = pageNumber + 1;
    setLoadingTweets(true);

    getTweets(userID, pageTemp)
      .then(res => {
        if (!res) {
          setLoadingTweets(0);
        } else {
          setTweets([...tweets, ...res]);
          setPageNumber(pageNumber);
          setLoadingTweets(false);
        }
      })
      .catch(() => {
        setTweets([]);
      });
  };

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>
          {userData
            ? `${userData.name} ${userData.lastname}`
            : "This user not exist"}
        </h2>
      </div>
      <BannerAvatar user={userData} />
      <UserInfo userinfo={userData} />
      <div className="user__tweets">
        <h3>User tweets</h3>
        {tweets && <TweetsList tweets={tweets} />}
        <Button onClick={moreTweets}>
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
      </div>
    </BasicLayout>
  );
}

export default withRouter(User);
