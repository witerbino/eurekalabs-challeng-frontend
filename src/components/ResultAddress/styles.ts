import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-top: 50px;
  padding: 0 10px;
`;

export const InputContainer = styled.div`
  width: 100%;

  height: 80px;
  padding-right: 15px;

  border: none;
  border-radius: 40px;
  background-color: var(--background-light);

  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  label {
    font-family: "Source Sans Pro";
    text-transform: uppercase;

    width: 120px;
    height: 100%;
    padding: 3px;
    padding-left: 15px;
    
    display: flex;
    align-items: center;

    color: var(--primary-color);
  }

  input {
    flex: 1;
    padding: 0 10px;
    background-color: transparent;

    border: none;
    height: 100%;

    font-size: 20px;
    text-transform: uppercase;
    font-family: "Source Sans Pro";
  }

  button {
    border: none;
    cursor: copy;
    background-color: transparent;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const WelcomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: #ebebeb;
    font-family: "Source Sans Pro";
    font-size: 24px;
  }
`;