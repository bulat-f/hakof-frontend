import React from "react";
import Head from "next/head";
import { Card, H1 } from "@hakof/common";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/static/favicon.ico" importance="low" />
    </Head>

    <Card>
      <H1>Hakofff</H1>
    </Card>
  </div>
);

export default Home;
