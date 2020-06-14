import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 25%;
    display: flex;
    flex-flow: column;

    input {
      border: none;
      border-bottom: 1px solid grey;
      &:nth-of-type(2) {
        margin-top: 15px;
      }
    }

    button {
      margin-top: 30px;
    }

    a {
      text-align: center;
      display: block; 
      margin-top: 10px;
    }
  }
`;
