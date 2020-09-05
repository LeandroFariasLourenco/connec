import styled, { css } from 'styled-components';

import { rem } from 'polished';

const flexAlign = css`
  ${({ theme }) => theme.flexCentered};
`;

const absolute = css`
  position: absolute;
  left: 10%;
  top: ${rem(100)};

  /** */
  ${({ theme }) => theme.mq.lessThan('md')`
    top: ${rem(10)};
  `}
`;

export const FirstBackground = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  left: 0;
  bottom: ${rem(20)};
  background: #b1e1fc;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.16);
  border-radius: 20px 0 0 20px;
  z-index: 1;
`;

export const SecondBackground = styled.div`
  width: 95%;
  height: 80%;
  position: absolute;
  right: 0;
  bottom: ${rem(40)};
  background: rgba(109, 113, 249, 0.7);
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.16);
  border-radius: 20px 0 0 20px;
  z-index: 2;
`;

export const Wrapper = styled.section`
  flex: 0.75;
  margin-left: ${rem(20)};
  height: 100%;
  position: relative;
  max-width: 1220px;
  ${({ noBackground }) => noBackground && flexAlign};
`;

export const FormField = styled.div`
  background: white;
  width: 90%;
  height: 85%;
  border-radius: 20px;
  max-height: ${rem(630)};
  max-width: ${rem(795)};
  z-index: 3;

  /** */
  ${({ isAbsolute }) => isAbsolute ? absolute : `
    box-shadow: 0 3px 10px #0000000D;
  `}
`;
