import React from 'react';
import { Icon } from 'semantic-ui-react';

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

export default ToolBar;
