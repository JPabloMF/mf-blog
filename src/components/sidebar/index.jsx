import React from 'react';
import { Icon } from 'semantic-ui-react';

import { StyledNav, StyledNavList, StyledLi } from './styles';

const SideBar = ({ openMenu }) => {
  const activeRoute = (url) =>
    window.location.href.split(window.location.host)[1] === url;

  return (
    <StyledNav openMenu={openMenu}>
      <StyledNavList>
        <StyledLi active={activeRoute('/Home')}>
          <Icon name="home" />
          {openMenu && 'Home'}
        </StyledLi>
        <StyledLi active={activeRoute('/Topics')}>
          <Icon name="list ul" />
          {openMenu && 'Topics'}
        </StyledLi>
        <StyledLi active={activeRoute('/Blogs')}>
          <Icon name="book" />
          {openMenu && 'Blogs'}
        </StyledLi>
      </StyledNavList>
    </StyledNav>
  );
};

export default SideBar;
