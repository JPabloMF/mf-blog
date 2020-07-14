import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { StyledNav, StyledNavList, StyledLi } from './styles';

const SideBar = ({ openMenu }) => {
  const [currentUrl, setCurrentUrl] = useState('Home');

  useEffect(() => {
    setCurrentUrl(
      window.location.href.split(window.location.host)[1].substr(1)
    );
  }, []);

  const activeRoute = (url) => {
    if (url.includes('Home') && currentUrl === '') {
      return true;
    } else {
      return currentUrl.includes(url);
    }
  };

  return (
    <StyledNav openMenu={openMenu}>
      <StyledNavList>
        <Link to="/Home">
          <StyledLi
            active={activeRoute('Home')}
            onClick={() => setCurrentUrl('Home')}
          >
            <Icon name="home" />
            {openMenu && 'Home'}
          </StyledLi>
        </Link>
        <Link to="/Topics">
          <StyledLi
            active={activeRoute('Topics')}
            onClick={() => setCurrentUrl('Topics')}
          >
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
  openMenu: PropTypes.bool.isRequired,
};

export default SideBar;
