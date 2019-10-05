import * as React from 'react';
import { H1, P } from '../Typography';
import Cover from './Cover';
import * as Styles from './styles';

class Article extends React.PureComponent {
  render() {
    const { title, description, cover, body } = this.props;
    return (
      <Styles.Wrapper>
        <Cover cover={cover}>
          <H1>{title}</H1>
        </Cover>
        <Styles.Content>
          <P italic={true}>{description}</P>
          <P>{body}</P>
        </Styles.Content>
      </Styles.Wrapper>
    );
  }
}

export default Article;