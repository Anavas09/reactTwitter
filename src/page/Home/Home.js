import React from "react";
import BasicLayout from "../../layouts/BasicLayout";

import "./Home.scss";

function Home() {
  return (
    <BasicLayout className="home">
      <div className="home__title">
        <h2>Home</h2>
      </div>
      <p>Tweets</p>
      <p>More tweets</p>
    </BasicLayout>
  );
}

export default Home;
