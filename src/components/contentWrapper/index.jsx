import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Wrapper } from './styles';

import { ROUTES } from '../../constants/routes';

const NotFound = () => <div>404 Page not found</div>;

const ContentWrapper = ({ openMenu }) => (
  <Wrapper openMenu={openMenu}>
    <Switch>
      {ROUTES.sections.map((section, sectionIndex) => (
        <Route
          key={sectionIndex}
          path={section.route}
          exact
          component={section.component}
        />
      ))}
      {ROUTES.topics.map((topic, topicIndex) => (
        <Route
          key={topicIndex}
          path={topic.route}
          exact
          component={topic.component}
        />
      ))}
      {ROUTES.htmlArticles.map((topic, topicIndex) => (
        <Route
          key={topicIndex}
          path={topic.route}
          exact
          component={topic.component}
        />
      ))}
      {ROUTES.cssArticles.map((topic, topicIndex) => (
        <Route
          key={topicIndex}
          path={topic.route}
          exact
          component={topic.component}
        />
      ))}
      {ROUTES.jsArticles.map((topic, topicIndex) => (
        <Route
          key={topicIndex}
          path={topic.route}
          exact
          component={topic.component}
        />
      ))}
      {ROUTES.reactArticles.map((topic, topicIndex) => (
        <Route
          key={topicIndex}
          path={topic.route}
          exact
          component={topic.component}
        />
      ))}
      {ROUTES.gitArticles.map((topic, topicIndex) => (
        <Route
          key={topicIndex}
          path={topic.route}
          exact
          component={topic.component}
        />
      ))}
      {ROUTES.godotArticles.map((topic, topicIndex) => (
        <Route
          key={topicIndex}
          path={topic.route}
          exact
          component={topic.component}
        />
      ))}
      {ROUTES.blenderArticles.map((topic, topicIndex) => (
        <Route
          key={topicIndex}
          path={topic.route}
          exact
          component={topic.component}
        />
      ))}
      {ROUTES.pixelArtArticles.map((topic, topicIndex) => (
        <Route
          key={topicIndex}
          path={topic.route}
          exact
          component={topic.component}
        />
      ))}
      {ROUTES.EnglishArticles.map((topic, topicIndex) => (
        <Route
          key={topicIndex}
          path={topic.route}
          exact
          component={topic.component}
        />
      ))}
      <Route component={NotFound} />
    </Switch>
  </Wrapper>
);

ContentWrapper.propTypes = {
  openMenu: PropTypes.bool.isRequired,
};

export default ContentWrapper;
