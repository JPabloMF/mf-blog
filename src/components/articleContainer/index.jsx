import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledArticle,
  StyledArticleHeader,
  StyledArticleUser,
} from './styles';

const ArticleContainer = ({ children, title, name, photo, date }) => {
  return (
    <StyledArticle>
      <StyledArticleHeader>
        <h1>{title}</h1>
        <StyledArticleUser>
          {photo ? (
            <img src={photo} alt={name} />
          ) : (
            <span className="article__defaultphoto" />
          )}
          <div className="article__info">
            <p className="name">{name}</p>
            <p className="date">{date}</p>
          </div>
        </StyledArticleUser>
      </StyledArticleHeader>
      {children}
    </StyledArticle>
  );
};

ArticleContainer.defaultProps = {
  photo: null,
};

ArticleContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  photo: PropTypes.object,
};

export default ArticleContainer;
