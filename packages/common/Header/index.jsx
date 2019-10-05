import * as React from 'react';
import { Grid } from '../Grid';
import * as Styles from './styles';

class Header extends React.PureComponent {
  state = { showMenu: false };

  toggleMenu = () => {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  render() {
    const { showMenu } = this.state;

    return (
      <Styles.Wrapper>
        <Grid>
          <Styles.Container>
            <Styles.Logo to="/" />
            <Styles.Menu show={showMenu}>
              <Styles.MenuItem>Articles</Styles.MenuItem>
              <Styles.MenuItem>Novels</Styles.MenuItem>
            </Styles.Menu>
            <Styles.Login to="/login">Login</Styles.Login>
            <Styles.MenuIcon onClick={this.toggleMenu} />
          </Styles.Container>
        </Grid>
      </Styles.Wrapper>
    );
  }
}

export default Header;