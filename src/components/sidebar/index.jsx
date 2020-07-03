import React from 'react';
import { Icon } from 'semantic-ui-react';

import { StyledNav, StyledNavList, StyledLi } from './styles';

const SideBar = ({ openMenu }) => {
  return (
    <StyledNav openMenu={openMenu}>
      <StyledNavList>
        <StyledLi>
          <Icon name="home" />
          {openMenu && 'Home'}
        </StyledLi>
        <StyledLi>
          <Icon name="list ul" />
          {openMenu && 'Topics'}
        </StyledLi>
        <StyledLi>
          <Icon name="book" />
          {openMenu && 'Blogs'}
        </StyledLi>
      </StyledNavList>
    </StyledNav>
  );
};

export default SideBar;
