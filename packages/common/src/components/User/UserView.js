import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { P } from "@hakof/ui";

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

const NameInput = styled.input`
  border: none;
  outline: none;
  font-family: ${({ theme: { basicFont } }) => basicFont};
  font-weight: bold;
  font-size: 1rem;
`;

const UserView = ({ avatar, first_name, last_name, onChange }) => (
  <UserWrapper>
    <AvatarWrapper>{avatar && <Avatar src={avatar} />}</AvatarWrapper>
    <P fontWeight="bold">{[first_name, last_name].join(" ")}</P>
  </UserWrapper>
);

UserView.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  editable: PropTypes.bool,
};

UserView.defaultProps = {
  avatar: null,
  name: "",
  editable: false,
};

export { UserView };
