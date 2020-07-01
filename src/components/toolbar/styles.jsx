import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.white};
  box-shadow: -3px 8px 17px -8px rgba(0, 0, 0, 0.39);
`;

const StyledNavTittle = styled.h1`
  padding: 20px 0;
  margin: 0;
  width: 250px;
  background-color: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
`;

export { StyledHeader, StyledNavTittle };
