import styled, { css } from 'styled-components';

import BackgroundImage from '@Images/dashboard/background.png';

import { rem } from 'polished';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #fafbff;
`;

const flex = css`
  flex: 1;
  padding-left: ${rem(80)};
`;

const flexAlign = css`
  align-items: center;
  display: flex;
  ${flex};
  padding-left: ${rem(80)};
`;

const hasBackground = (align) => css`
  background-image: url(${BackgroundImage});
  background-position: ${align};
  background-repeat: no-repeat;
  background-position: 110% ${rem(175)};
  background-repeat: no-repeat;
  background-size: ${rem(740)} ${rem(750)};
`;

export const RightWrapper = styled.section`
  ${({ alignRight }) => alignRight ? flexAlign : flex};
  ${({ backgrounAlignRight }) => backgrounAlignRight && hasBackground('right')}
`;
