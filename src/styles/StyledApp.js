import styled from 'styled-components';

export const StyledApp = styled.div`
  .title {
    font-size: 50px;
    text-align: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    .item { 
      font-size: 16px;
      font-weight: 700;
      list-style: none;
      width: 600px;
      padding: 10px 20px;
      border-top: 1px solid #ccc;

      &:last-child {
        border-bottom: 1px solid #ccc;
      }
    }
  }
`;
