import styled from 'styled-components';

export const StyledStopwatch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    line-height: 1.5;
    max-width: 350px;
  }

  .time {
    margin-left: auto;
  }

  .resume,
  .stop {
    font-size: 25px;
    fill: #2A2424;
    margin-left: 20px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      fill: #000;
    }
  }

  .delete {
    font-size: 25px;
    fill: #d2697a;
    margin-left: 10px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      fill: tomato;
    }
  }

  .active {
    color: #3faf6c;
  }
`;
