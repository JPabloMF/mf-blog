import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

/* Components */
import Home from '../../screens/home';

const Wrapper = styled.div`
  position: absolute;
  left: ${(props) => (props.openMenu ? '250px' : '70px')};
  top: 70px;
  width: ${(props) => (props.openMenu ? 'calc(100% - 250px)' : 'calc(100% - 70px)')};
  transition: 300ms;
`;

const Topics = () => <div>Topics</div>;

const Blogs = () => <div>Blogs</div>;

const NotFound = () => <div>404 Page not found</div>;

const ContentWrapper = ({ openMenu }) => (
  <Wrapper openMenu={openMenu}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Topics" component={Topics} />
      <Route path="/Blogs" component={Blogs} />
      <Route component={NotFound} />
    </Switch>
  </Wrapper>
);

export default ContentWrapper;
