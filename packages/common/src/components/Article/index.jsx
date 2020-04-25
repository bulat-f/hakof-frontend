import React from "react";
import PropTypes from "prop-types";
import { H1, P } from "@hakof/ui";
import Cover from "./Cover";
import * as Styles from "./styles";

class Article extends React.PureComponent {
  render() {
    const { title, cover, body } = this.props;
    const bodyParts = body && body.split("\n").filter(part => Boolean(part));
    return (
      <Styles.Wrapper>
        <Cover cover={cover}>
          <H1 color="invertedText">{title}</H1>
        </Cover>
        <Styles.Content>
          {bodyParts.map((paragraph, index) => (
            <P key={`paragraph-${index}`}>{paragraph}</P>
          ))}
        </Styles.Content>
      </Styles.Wrapper>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
  body: PropTypes.string.isRequired
};

Article.defaultProps = {
  cover: ""
};

export default Article;
