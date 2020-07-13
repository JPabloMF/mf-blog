import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  display: flex;
  background-color: ${(props) => props.theme.white};
  box-shadow: -3px 8px 17px -8px rgba(0, 0, 0, 0.39);
`;

const StyledNavTittle = styled.h1`
  padding: 20px 0;
  margin: 0;
  width: ${(props) => (props.openMenu ? '250px' : '70px')};
  background-color: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
  transition: 300ms;
  text-align: center;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 25px;
  padding: 10px;
  color: ${(props) => props.theme.darkGrey};
  cursor: pointer;
  outline: none;
`;

export { StyledHeader, StyledNavTittle, StyledButton };
