import styled from 'styled-components';

import { rem } from 'polished';

export const Title = styled.h2`
  font-size: ${rem(32)};
  font-weight: normal;
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: ${rem(60)};
`;

export const HistoryCount = styled.span`
  font-size: ${rem(14)};
  color: #606060;

  span {
    margin-right: ${rem(5)};
  }
`;
