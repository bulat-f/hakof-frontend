import * as React  from 'react';
import { H2, P }   from '../Typography';
import Cover       from './Cover'
import Header      from './Header';
import * as Styles from './styles';
import Wrapper from './Wrapper';

class ArticleReview extends React.PureComponent {
  render() {
    const { href, title, description, cover, selected } = this.props;

    return (
      <Wrapper selected={selected}>
        <Cover src={cover} />
        <Styles.Link href={href} />
        <Styles.Inner>
          <Header />
          <Styles.Content>
            <H2>{title}</H2>
            <P>{description}</P>
          </Styles.Content>
        </Styles.Inner>
      </Wrapper>
    );
  }
}

export default ArticleReview;