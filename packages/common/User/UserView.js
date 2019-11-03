import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { P } from "../Typography";

const UserWrapper = styled.div`
  display: flex;
`;

const AvatarWrapper = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background: #ccc;
  margin-right: 0.75rem;
`;

const Avatar = styled.img`
  height: 2.5rem;
  width: 2.5rem;
`;

const UserView = ({ avatar, name }) => (
  <UserWrapper>
    <AvatarWrapper>{avatar && <Avatar src={avtar} />}</AvatarWrapper>
    <P fontWeight="bold">{name}</P>
  </UserWrapper>
);

UserView.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired
};

UserView.defaultProps = {
  avator: null
};

export { UserView };
