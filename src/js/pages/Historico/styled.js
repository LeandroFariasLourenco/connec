import styled from 'styled-components';

import { rem } from 'polished';

export const HistoryWrapper = styled.section`
  width: 80%;
  margin-left: 10%;
  height: 90%;
  position: relative;
  padding-top: ${rem(60)};

  ${({ theme }) => theme.mq.lessThan('md')`
    padding-top: ${rem(60)};
  `}
`;

export const Background = styled.div``;
