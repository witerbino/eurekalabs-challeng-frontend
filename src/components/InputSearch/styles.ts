import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 0 10px;
`;

export const Content = styled.section`
  height: 80px;
  width: 100%;
  max-width: 800px;

  display: flex;
  align-items: center;

  margin: -40px auto 0;
  padding: 0 5px;
  
  background-color: #fff;
  border: 3px solid var(--primary-color);
  border-radius: 40px;

  overflow: hidden;
  transition: all 0.3s;
  
  &:focus-within {
    box-shadow: 0 0 0 5px rgba(255, 202, 44, 0.5);
  }

  input[type=text] {
    flex: 1;
    height: 100%;

    border: none;
    padding-left: 15px;

    font-size: 32px;
    font-weight: 100;
    font-family: "Source Sans Pro";

    color: #666;

    &::placeholder {
      color: #ccc;
      font-size: 32px;
      font-style: italic;
    }
  }

  button {
    color: #fff;

    width: 70px;
    height: 70px;

    border: none;
    background-color: transparent;

    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;