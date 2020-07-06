import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: ${(props) => props.openMenu ? '250px' : '70px'};
  margin-top: 70px;
  transition: 300ms;
`;

const Home = () => <div>Home</div>;

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
