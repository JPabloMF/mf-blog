import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledCardContainer, StyledCard } from './styles';

import { TOPICS } from '../../constants/constants';

const TopicCard = (props) => {
  return (
    <StyledCardContainer>
      {TOPICS.map((topic, topicIndex) => (
        <Link to={topic.route}>
          <StyledCard bg={topic.bg} type={topic.name} key={topicIndex}>
            {topic.icon && <img src={topic.icon} alt={topic.name} />}
          </StyledCard>
        </Link>
      ))}
    </StyledCardContainer>
  );
};

TopicCard.propTypes = {
  props: PropTypes.object.isRequired,
};

export default TopicCard;
