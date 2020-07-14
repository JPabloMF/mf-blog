import styled, { css } from 'styled-components';

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.blue};
  position: fixed;
  z-index: 2;
  left: 0;
  bottom: 0;
  width: ${(props) => (props.openMenu ? '250px' : '70px')};
  height: calc(100% - 70px);
  transition: 300ms;
`;

const StyledNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  color: ${(props) => props.theme.grey};
  padding: 20px 20px;
  text-align: start;
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.lightBlue};
    border-left: 5px solid ${(props) => props.theme.white};
    padding: 20px 15px;
  }
  ${(props) =>
    props.active
      ? css`
          color: ${(props) => props.theme.white};
          background-color: ${(props) => props.theme.lightBlue};
          border-left: 5px solid ${(props) => props.theme.white};
        `
      : css`
          background-color: transparent;
          border-left: none;
        `};
`;

export { StyledNav, StyledNavList, StyledLi };
