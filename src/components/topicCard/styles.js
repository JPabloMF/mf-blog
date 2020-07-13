import styled, { css } from 'styled-components';

const handleSelectBackgroundColor = (type, props) => {
  switch (type) {
    case 'HTML':
      return props.orangeHTML;
    case 'CSS':
      return props.blueCSS;
    case 'JavaScript':
      return props.yellowJS;
    case 'React':
      return props.blueReact;
    case 'Git':
      return props.white;
    case 'Godot':
      return props.white;
    case 'Blender':
      return props.white;
    case 'English':
      return props.white;
    default:
      return props.white;
  }
};

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  font-size: 60px;
  font-weight: bolder;
  height: 150px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 20px 20px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.5);
  background-color: ${(props) =>
    handleSelectBackgroundColor(props.type, props.theme)};
  ${(props) =>
    props.bg &&
    css`
      background-image: url(${props.bg});
      background-size: contain;
      background-repeat: no-repeat;
    `}
  img {
    height: 60%;
  }
`;

export { StyledCardContainer, StyledCard };
