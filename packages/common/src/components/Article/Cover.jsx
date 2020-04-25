import React from 'react';
import { CardInner } from '@hakof/ui';
import * as Styles from './styles';

class Cover extends React.PureComponent {
  render() {
    const { cover, children } = this.props;

    return (
      <Styles.Cover cover={cover}>
        <CardInner>{children}</CardInner>
      </Styles.Cover>
    );
  }
}

export default Cover;