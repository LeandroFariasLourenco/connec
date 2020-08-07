import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 25%;
  display: flex;
  flex-flow: column;
  max-width: ${rem(280)};

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
  }

  button {
    margin-top: ${rem(30)};
  }

    a {
      text-align: center;
      display: block;
      margin-top: ${rem(10)};
      font-size: ${rem(14)};
      color: ${({ theme }) => theme.grey};
      font-weight: bold;
    }
  }
`;
