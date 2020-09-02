import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.div`
  padding: 5%;

  .welcome {
    display: flex;
    justify-content: center;
    align-items: center;

    > p {
      font-weight: 500;
    }
  }

  .statistics {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 60px 0;

    .statistics-card {
      padding: 24px;
      box-shadow: 1px 1px 4px #000;

      & + .statistics-card {
        margin-left: 24px;
      }

      > span {
        font-size: 48px;
        font-weight: 900;
        text-align: center;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;

    .action-card {
      width: 300px;
      display: flex;
      height: 100px;
      padding: 24px;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 12px;
      box-shadow: 1px 1px 4px #000;
      text-decoration: none;

      color: #0d132a;
      background: #f3e0ec;

      & + .action-card {
        margin-left: 24px;
      }

      &:hover {
        background: ${shade(0.2, '#f3e0ec')};
        cursor: pointer;
      }
    }
  }
`;
