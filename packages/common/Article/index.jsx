import React from "react";
import PropTypes from "prop-types";
import { H1, P } from "../Typography";
import Cover from "./Cover";
import * as Styles from "./styles";

class Article extends React.PureComponent {
  render() {
    const { title, description, cover, body } = this.props;
    return (
      <Styles.Wrapper>
        <Cover cover={cover}>
          <H1 color="invertedText">{title}</H1>
        </Cover>
        <Styles.Content>
          <P italic={true}>{description}</P>
          <P>{body}</P>
        </Styles.Content>
      </Styles.Wrapper>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.string,
  body: PropTypes.string.isRequired
};

Article.defaultProps = {
  cover: ""
};

export default Article;
