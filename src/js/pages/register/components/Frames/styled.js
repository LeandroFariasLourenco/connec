import styled from 'styled-components';

import { rem } from 'polished';

export const FirstBackground = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  background: yellow;
  left: 0;
  bottom: ${rem(40)};
  background: #B1E1FC;
  box-shadow: 0 0 10px rgb(0, 0, 0, .16);
  border-radius: 50px 0 0 50px;
  z-index: 1;
`;

export const SecondBackground = styled.div`
  width: 95%;
  height: 80%;
  position: absolute;
  right: 0;
  bottom: ${rem(80)};
  background: rgba(109, 113, 249, .7);
  box-shadow: 0 0 10px rgb(0, 0, 0, .16);
  border-radius: 50px 0 0 50px;
  z-index: 2;
`;

export const Wrapper = styled.section`
  flex: 0.70;
  height: 100%;
  position: relative;
`;
