import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { lighten } from "polished";
import { P, DropdownWrapper, Dropdown } from "@hakof/ui";

import * as DICTIONARY_KEYS from "../../dictionaries/keys";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img.attrs({
  src: "/static/avatar.svg",
  height: "28px"
})`
  margin-right: 0.5rem;
  border-radius: 1.75rem;
  border: 1px ${({ theme }) => theme.colors.lightGray} solid;
`;

const FullName = styled(P)`
  font-weight: bold;
  margin: 0;
`;

const MenuList = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0.5rem 0;
`;

const MenuItem = styled(P).attrs({
  as: "li"
})`
  display: flex;
  align-items: center;
  padding: 0.25rem 1.25rem;
  margin: 0;
  cursor: pointer;
  white-space: nowrap;

  ${({ separated }) =>
    separated &&
    css`
      background-color: ${({ theme }) => lighten(0.25, theme.colors.primary)};
    `}

  &:hover {
    background-color: ${({ theme }) => lighten(0.3, theme.colors.primary)};
  }
`;

const MenuItemIcon = styled.img.attrs(({ name }) => ({
  src: `/static/icons/${name}.svg`,
  height: "16px"
}))`
  margin-right: 0.5rem;
`;

const UserDropdownView = ({
  first_name,
  last_name,
  shown,
  toggle,
  logout,
  translator: t
}) => (
  <DropdownWrapper onClick={toggle}>
    <Wrapper>
      <Avatar />
      <P>
        {first_name} {last_name[0]}.
      </P>
    </Wrapper>
    <Dropdown shown={shown}>
      <MenuList>
        <MenuItem separated>
          <FullName>
            {first_name} {last_name}
          </FullName>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon name="bookmark" />
          {t(DICTIONARY_KEYS.MENU_ITEM_BOOKMARKS)}
        </MenuItem>
        <MenuItem>
          <MenuItemIcon name="gear" />
          {t(DICTIONARY_KEYS.MENU_ITEM_SETTINGS)}
        </MenuItem>
        <MenuItem onClick={logout}>
          <MenuItemIcon name="logout" />
          {t(DICTIONARY_KEYS.MENU_ITEM_SIGN_OUT)}
        </MenuItem>
      </MenuList>
    </Dropdown>
  </DropdownWrapper>
);

UserDropdownView.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  shown: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  translator: PropTypes.func.isRequired
};

export { UserDropdownView };
