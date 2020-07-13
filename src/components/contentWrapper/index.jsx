import React from 'react';
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
      <Route component={NotFound} />
    </Switch>
  </Wrapper>
);

export default ContentWrapper;
