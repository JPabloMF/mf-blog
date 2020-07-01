import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.blue};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 250px;
  height: calc(100vh - 70px);
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
`;

export { StyledNav, StyledNavList, StyledLi };
