import React from 'react';
import { Link } from 'react-router-dom';

import TopicHeader from '../../../components/topicHeader';
import ArticleCard from '../../../components/articleCard';

import html from '../../../assets/logos/html.png';

import { ARTICLES } from './constants';
import { StyledCardContainer } from './style';

const Html = () => {
  return (
    <div>
      <TopicHeader icon={html} name="html" />
      <StyledCardContainer>
        {ARTICLES.map((article, articleIndex) => (
          <Link to={article.route}>
            <ArticleCard
              key={articleIndex}
              title={article.title}
              description={article.description}
              technologies={article.technologies}
            />
          </Link>
        ))}
      </StyledCardContainer>
    </div>
  );
};

export default Html;
