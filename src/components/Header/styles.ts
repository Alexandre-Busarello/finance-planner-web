import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2.5rem;
    z-index: 1;
    width: 100%;
    background: #23283d;

    > div {
      > h1 {
        font-weight: 900;
        > a {
          text-decoration: none;
          color: #f3e0ec;
        }
      }
    }

    > ul {
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: center;

      > li {
        margin: 0.4rem 1rem 0 0;
        padding: 0 0.3rem;
        color: #ff813f;
        font-weight: 700;
        cursor: pointer;

        &:hover {
          font-size: 18px;
        }

        > button {
          background: #ff813f;
          color: #f3e0ec;
          padding: 0.7rem 1.5rem;
          border: none;
          border-radius: 20px;
          font-weight: 500;

          transition: all 0.3s;

          &:hover {
            background: ${shade(0.2, '#FF813F')};
          }
        }
      }
    }
  }
`;
