import React from 'react';
import { Icon } from 'semantic-ui-react';

import { StyledNav, StyledNavList, StyledLi } from './styles';

const SideBar = () => {
  return (
    <StyledNav>
      <StyledNavList>
        <StyledLi>
          <Icon name="home" />
          Home
        </StyledLi>
        <StyledLi>
          <Icon name="list ul" />
          Topics
        </StyledLi>
        <StyledLi>
          <Icon name="book" />
          Blogs
        </StyledLi>
      </StyledNavList>
    </StyledNav>
  );
};

export default SideBar;
