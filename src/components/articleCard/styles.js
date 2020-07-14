import styled from 'styled-components';

const StyledCard = styled.div`
  width: 400px;
  height: 150px;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.theme.white};
  p {
    margin: 10px 0;
  }
  .title {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.blue};
    text-align: center;
    font-weight: bolder;
    font-size: 20px;
    margin: 0;
    margin-bottom: 10px;
  }
  .tech {
    color: ${(props) => props.theme.grey};
    margin-right: 10px;
  }
`;

export { StyledCard };