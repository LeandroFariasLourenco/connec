import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 25%;
    display: flex;
    flex-flow: column;
    max-width: 280px;

    img {
      height: auto;
      width: 70%;
      margin: 0 auto;
      margin-bottom: 40px;
    }
    
    div {
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
      margin-top: ${rem(10)};
      font-size: ${rem(14)};
      color:${({ theme }) => theme.grey};
      font-weight: bold;
    }
  }
`;
