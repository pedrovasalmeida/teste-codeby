import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const ButtonAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(6px);
  }

  100% {
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #cfd5e2;
  width: 100vw;
  height: 100vh;

  padding: 16px;

  & > button {
      position: fixed;
      left: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
      
      height: 50px;

      padding: 0 32px;
      margin-right: auto;
      color: #fff;

      border: none;
      border-radius: 8px;
      background: #5071f2;

      transition: all 200ms ease;

      animation: ${ButtonAnimation} 4000ms infinite ease;

      &:hover {
        background: ${darken(0.1, '#5071f2')};
      }

      & > svg {
        margin-right: 8px;
      }

      & > p {
        font-weight: bold;
      }

      @media only screen and (max-width: 999px) {
        z-index: 2;
        padding: 8px 16px;
        left: unset;
        right: 20px;
        top: 20px;

        animation: none;

        & > p {
          display: none;
        }

        & > svg {
          margin-right: 0;
        }
      }
  }
`;