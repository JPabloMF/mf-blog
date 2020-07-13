import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './style';

const TopicHeader = ({ icon, name }) => {
  return (
    <StyledContainer type={name}>
      <img src={icon} alt={name} />
    </StyledContainer>
  );
};

TopicHeader.propTypes = {
  icon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default TopicHeader;
