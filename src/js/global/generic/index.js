import { css } from 'styled-components';

export const fullSection = css`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const transition = (property, duration) => css`
  transition: ${property} ${duration};
`;
