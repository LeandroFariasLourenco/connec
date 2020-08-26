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
  margin-left: 10%;
`;

const flexAlign = css`
  align-items: center;
  display: flex;
  ${flex};
  padding-left: ${rem(80)};

  /** */
  ${({ theme }) => theme.mq.greaterThan('screenMd')`
    padding-left: ${rem(120)};
  `}
`;

const hasBackground = css`
  background-image: url(${BackgroundImage});
  background-position: right -10% bottom -140%;
  background-repeat: no-repeat;
  background-size: ${rem(740)} ${rem(750)};
`;

export const RightWrapper = styled.section`
  ${({ alignRight }) => alignRight ? flexAlign : flex};
  ${({ backgrounAlignRight }) => backgrounAlignRight && hasBackground}
`;

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;
