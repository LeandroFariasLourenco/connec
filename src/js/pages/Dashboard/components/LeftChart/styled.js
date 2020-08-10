import styled from 'styled-components';

import { rem } from 'polished';

export const ChartWrapper = styled.div`
  width: 25%;
  height: 100%;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 3;
  padding: ${rem(20)};
`;
