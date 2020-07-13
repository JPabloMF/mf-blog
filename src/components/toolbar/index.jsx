import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { StyledHeader, StyledNavTittle, StyledButton } from './styles';

const ToolBar = ({ openMenu, setOpenMenu }) => {
  return (
    <StyledHeader>
      <StyledNavTittle openMenu={openMenu}>
        {openMenu ? `MF'S BLOG` : 'MF'}
      </StyledNavTittle>
      <StyledButton onClick={setOpenMenu}>
        <Icon name="bars" />
      </StyledButton>
    </StyledHeader>
  );
};

ToolBar.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
};


export default ToolBar;
