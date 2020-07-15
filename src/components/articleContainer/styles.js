import styled from 'styled-components';

const StyledArticle = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 50px;
`;

const StyledArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledArticleUser = styled.div`
  display: flex;
  .article__info {
    display: flex;
    flex-direction: column;
    .date {
      color: ${(props) => props.theme.grey};
    }
    .name{
      font-weight: bolder;
    }
  }
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 5px;
  }
  .article__defaultphoto {
    display: block;
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.theme.grey};
    border-radius: 50%;
    margin: 5px;
  }
`;

export { StyledArticle, StyledArticleHeader, StyledArticleUser };
