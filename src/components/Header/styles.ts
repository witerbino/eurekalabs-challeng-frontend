import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 150px;

  background-color: var(--background); 
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  max-width: 900px; 

  margin: 0 auto;

  display: flex;
  justify-content: center;

  img {
    width: 64px;
    height: 64px;
    margin-top: 12px;
    margin-right: 5px;
  }
`;