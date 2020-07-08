import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import blueShape from '../../assets/rect.png';

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  justify-items: center;
  font-size: 25px;
  display: flex;
`;

const StyledPresentation = styled.div`
  width: 40%;
  padding-left: 10%;
  padding-top: 10%;
  p {
    margin-bottom: 0;
  }
  .bold {
    font-weight: bold;
    font-size: 60px;
    margin: 5px 0;
    height: 70px;
    &:last-child {
      margin-bottom: 25px;
    }
    .blue {
      color: ${(props) => props.theme.blue};
    }
  }
`;

const StyledTopics = styled.div`
  width: 60%;
  height: 500px;
  background-image: url(${blueShape});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 5%;
  padding-top: 5%;
  div {
    margin-top: 50px;
    color: ${(props) => props.theme.white};
    font-size: 60px;
  }
  .title {
    width: 50%;
    font-size: 40px;
    border-bottom: 1px solid ${(props) => props.theme.white};
    line-height: 0.1em;
    margin: 10px 0 20px;
    text-align: center;
  }
  .title span {
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    padding: 0 10px;
  }
`;

const StyledContactme = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .title {
    font-weight: bold;
    font-size: 30px;
    color: ${(props) => props.theme.black};
  }
  color: ${(props) => props.theme.blue};
  font-size: 40px;
`;

const Home = (props) => {
  return (
    <StyledMainContainer>
      <StyledContainer>
        <StyledPresentation>
          <p className="bold">!Hello¡</p>
          <p className="bold">
            I am <span className="blue">mf coder</span>
          </p>
          <p>And this is my blog where I post</p>
          <p>about technology advices, code,</p>
          <p>snippets and more!</p>
        </StyledPresentation>
        <StyledTopics>
          <p className="title">
            <span>TOPICS</span>
          </p>
          <div>
            <Icon name="html5" />
            <Icon name="css3 alternate" />
            <Icon name="js" />
            <Icon name="react" />
            <Icon name="sass" />
            <Icon name="git" />
          </div>
        </StyledTopics>
      </StyledContainer>
      <StyledContactme>
        <p className="title">Contact me:</p>
        <Icon name="twitter" />
        <Icon name="linkedin" />
        <Icon name="github" />
        <Icon name="mail" />
      </StyledContactme>
    </StyledMainContainer>
  );
};

Home.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Home;
