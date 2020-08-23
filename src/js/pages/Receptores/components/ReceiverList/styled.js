import styled from 'styled-components';

import { rem } from 'polished';

export const HeadingWrapper = styled.div`
  width: 100%;
  padding: ${rem(28)};
  padding-left: ${rem(40)};
`;

export const ReceiverCount = styled.span`
  margin-top: ${rem(12)};
  color: #606060;
  font-size: ${rem(10)};

  span {
    margin-right: ${rem(5)};
  }
`;

export const ListTitle = styled.h2`
  font-size: ${rem(16)};
  color: #000000;
  text-transform: uppercase;
  font-weight: 500;
`;
