import styled from 'styled-components';
import { rem } from 'polished';

import { Btn } from '@Components/Button/styled';

export const MessageWrapper = styled.div`
  border: ${rem(1)} solid green;
  border-radius: ${rem(10)};
  padding: ${rem(20)} ${rem(10)};
  background: rgba(134, 214, 84, 0.2);
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;

  span,
  strong {
    display: block;
    text-align: center;
    width: 100%;
    font-size: ${rem(14)};
    margin: ${rem(5)} ${rem(10)};
  }

  ${Btn} {
    margin-top: ${rem(5)};
    width: fit-content;
  }
`;
