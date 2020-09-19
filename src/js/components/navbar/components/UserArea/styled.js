import styled from 'styled-components';

import { rem } from 'polished';

import Button from '@Components/Button';

export const UserAreaWrapper = styled.div`
  margin-top: ${rem(40)};
  ${({ theme }) => theme.flexCentered}
  flex-flow: column;
`;

export const Logout = styled(Button)`
  margin-top: ${rem(50)};
  
  img {
    transition: transform 200ms;

    &:hover {
      transform: scale(1.1);
    }
  }

  /** */
  ${({ theme }) => theme.mq.lessThan('md')`
    margin-top: ${rem(25)};  
  `}
`;
