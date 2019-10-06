import React, { Fragment } from "react";
import Head from "next/head";
import { Grid, ArticleReview } from "@hakof/common";

import { getArticles } from "../data";

class Home extends React.Component {
  static async getInitialProps() {
    const articles = await getArticles();
    return { articles };
  }

  render() {
    const { articles } = this.props;

    return (
      <Fragment>
        <Head>
          <title>Home</title>
        </Head>

        <Grid>
          {articles.map(article => (
            <ArticleReview {...article} />
          ))}
        </Grid>
      </Fragment>
    );
  }
}

export default Home;
