import styled from 'styled-components';

import { rem } from 'polished';

export const GraphicWrapper = styled.div`
  height: 100%;
  width: calc(75% - 50px);
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-left: ${rem(40)};
  padding: ${rem(30)};
  transition: opacity 400ms;
  ${({ theme }) => theme.flexCentered};
`;
