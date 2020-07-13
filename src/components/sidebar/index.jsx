import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { StyledNav, StyledNavList, StyledLi } from './styles';

const SideBar = ({ openMenu }) => {
  const activeRoute = (url) =>
    window.location.href.split(window.location.host)[1] === url;

  return (
    <StyledNav openMenu={openMenu}>
      <StyledNavList>
        <Link to="/Home">
          <StyledLi active={activeRoute('/Home')}>
            <Icon name="home" />
            {openMenu && 'Home'}
          </StyledLi>
        </Link>
        <Link to="/Topics">
          <StyledLi active={activeRoute('/Topics')}>
            <Icon name="list ul" />
            {openMenu && 'Topics'}
          </StyledLi>
        </Link>
        {/* <Link to="/Blogs">
          <StyledLi active={activeRoute('/Blogs')}>
            <Icon name="book" />
            {openMenu && 'Blogs'}
          </StyledLi>
        </Link> */}
      </StyledNavList>
    </StyledNav>
  );
};

SideBar.propTypes = {
  openMenu: PropTypes.bool.isRequired
};

export default SideBar;
