import styled from 'styled-components';
import { rem } from 'polished';

export const InformationWrapper = styled.div`
  width: 75%;
  height: 80%;
  margin-left: ${rem(125)};
  position: relative;
  z-index: 1;
  ${({ theme }) => theme.mq.lessThan('1366px')`
    width: 80%;
    height: 90%;
  `}
`;

export const Title = styled.h2`
  color: black;
  font-weight: 500;
  font-size: ${rem(34)};
  margin-bottom: ${rem(40)};
`;

export const ChartsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 65%;
`;
