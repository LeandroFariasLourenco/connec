import styled from 'styled-components';

import { rem } from 'polished';

export const FirstBackground = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  left: 0;
  bottom: ${rem(40)};
  background: #b1e1fc;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.16);
  border-radius: 50px 0 0 50px;
  z-index: 1;
`;

export const SecondBackground = styled.div`
  width: 95%;
  height: 80%;
  position: absolute;
  right: 0;
  bottom: ${rem(80)};
  background: rgba(109, 113, 249, 0.7);
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.16);
  border-radius: 50px 0 0 50px;
  z-index: 2;
`;

export const Wrapper = styled.section`
  flex: 0.75;
  height: 100%;
  position: relative;
  max-width: 1220px;
`;
