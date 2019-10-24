import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Grid } from "../Grid";
import * as Styles from "./styles";

class Header extends PureComponent {
  state = { showMenu: false };

  toggleMenu = () => {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  };

  render() {
    // const { showMenu } = this.state;
    const { logo: Logo, children } = this.props;

    return (
      <Styles.Wrapper>
        <Grid>
          <Styles.Container>
            <Logo />
            {children}
          </Styles.Container>
        </Grid>
      </Styles.Wrapper>
    );
  }
}

Header.propTypes = {
  logo: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired
};

export default Header;
