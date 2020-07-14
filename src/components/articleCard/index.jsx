import React from 'react';
import PropTypes from 'prop-types';

import { StyledCard } from './styles';

const ArticleCard = ({ title, description, technologies }) => {
  return (
    <StyledCard>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <div>
        {technologies.map((technology, technologyIndex) => (
          <span key={technologyIndex} className="tech">
            {technology}
          </span>
        ))}
      </div>
    </StyledCard>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArticleCard;
