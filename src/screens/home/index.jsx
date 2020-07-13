import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import blueShape from '../../assets/rect.png';

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  font-size: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledPresentation = styled.div`
  width: 600px;
  padding-left: 10%;
  padding-top: 10%;
  p {
    margin-bottom: 0;
  }
  .bold {
    font-weight: bold;
    font-size: 60px;
    margin: 5px 0;
    &:last-child {
      margin-bottom: 25px;
    }
    .blue {
      color: ${(props) => props.theme.blue};
    }
  }
`;

const StyledTopics = styled.div`
  width: 600px;
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
    font-size: 50px;
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
  @media (max-width: 768px) {
    display: none;
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
  a {
    color: ${(props) => props.theme.blue};
    font-size: 40px;
  }
`;

const Home = () => {
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
        <a href="https://twitter.com/_MFcoder_" target="__blank">
          <Icon name="twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/juan-pablo-mu%C3%B1oz-alvarez-a9719914b/"
          target="__blank"
        >
          <Icon name="linkedin" />
        </a>
        <a href="https://github.com/JPabloMF" target="__blank">
          <Icon name="github" />
        </a>
        {/* <a href="" target="__blank">
          <Icon name="mail" />
        </a> */}
      </StyledContactme>
    </StyledMainContainer>
  );
};

export default Home;
