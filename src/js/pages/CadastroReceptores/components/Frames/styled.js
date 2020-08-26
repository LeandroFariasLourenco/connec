import styled from 'styled-components';

import { rem } from 'polished';

export const Wrapper = styled.section`
  flex: 0.7;
  ${({ theme }) => theme.flexCentered};
  margin-left: ${rem(20)};
  height: 100%;
  position: relative;
  max-width: 1220px;
`;
