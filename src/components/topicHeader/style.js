import styled, { css } from 'styled-components';

import { handleSelectBackgroundColor } from '../../utils';

const StyledContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    handleSelectBackgroundColor(props.type, props.theme)};
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.5);
  /* ${(props) =>
    props.bg &&
    css`
      background-image: url(${props.bg});
      background-size: contain;
      background-repeat: no-repeat;
    `} */
  img {
    height: 80%;
  }
`;

export { StyledContainer };
