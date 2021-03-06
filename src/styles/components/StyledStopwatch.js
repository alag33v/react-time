import styled from 'styled-components';

export const StyledStopwatch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    line-height: 1.5;
    max-width: 350px;

    @media (max-width: 650px) {
      max-width: 300px;
    }

    @media (max-width: 550px) {
      max-width: 200px;
    }

    @media (max-width: 450px) {
      max-width: 120px;
    }
  }

  .time {
    margin-left: auto;
  }

  .resume,
  .stop {
    font-size: 25px;
    fill: #2a2424;
    margin-left: 20px;
    transition: 0.3s;
    cursor: pointer;

    @media (max-width: 450px) {
      margin-left: 10px;
    }

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

    @media (max-width: 450px) {
      margin-left: 5px;
    }

    &:hover {
      fill: tomato;
    }
  }

  .active {
    color: #3faf6c;
  }
`;
