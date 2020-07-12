import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: ${(props) => (props.openMenu ? '250px' : '70px')};
  top: 70px;
  width: ${(props) =>
    props.openMenu ? 'calc(100% - 250px)' : 'calc(100% - 70px)'};
  transition: 300ms;
`;
