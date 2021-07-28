import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 32px;
    height: 32px;
    margin-bottom: 10px;

    border-radius: 50%;
    border: 5px solid var(--primary-color);
    border-top-color: rgba(255, 202, 44, 0.5);
    animation: ${loadingAnimation} 1s infinite;
  }

  p {
    color: #333;
    font-family: "Source Sans Pro";
    font-size: 18px;
  }
`;