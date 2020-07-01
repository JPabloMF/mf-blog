import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.blue};
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
`;

const StyledNavTittle = styled.h1`
  padding: 20px 0;
  background-color: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
`;

const StyledNavList = styled.ul`
  list-style: none;
  padding: 0;
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
`;

export { StyledNav, StyledNavTittle, StyledNavList, StyledLi };
