import styled, { keyframes } from 'styled-components';

const logoAnimation = keyframes`
  from { 
    transform: translateY(0);
  }

  to {
    transform: translateY(10px);
  }
`

export const Container = styled.header`
  width: 100%;
  height: 150px;
  background: var(--background);
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  max-width: 800px; 

  margin: 0 auto;

  display: flex;
  justify-content: center;

  img {
    width: 64px;
    height: 64px;
    margin-top: 12px;
    margin-right: 5px;

    animation: ${logoAnimation} alternate infinite 1s ease-in-out;
  }
`;