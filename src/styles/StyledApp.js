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
      max-width: 100%;
      padding: 10px 20px;
      border-top: 1px solid #ccc;

      @media (max-width: 450px) {
        padding: 5px 10px;
      }

      @media (max-width: 350px) {
        font-size: 14px;
      }

      &:last-child {
        border-bottom: 1px solid #ccc;
      }
    }
  }
`;
