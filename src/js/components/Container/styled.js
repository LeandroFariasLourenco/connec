import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #fafbff;
`;

const flex = css`
  flex: 0.9;
`;

const flexAlign = css`
  align-items: center;
  display: flex;
  ${flex};
`;

export const RightWrapper = styled.section`
  ${({ alignRight }) => alignRight ? flexAlign : flex};
`;
