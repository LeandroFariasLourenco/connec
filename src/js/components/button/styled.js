import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const Btn = styled.button`
  ${props => props.reset ? btnReset : btnStyle}
`;

const btnReset = css`
  overflow: visible;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  font: inherit;
  line-height: normal;
  -moz-user-select: text;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const btnStyle = css`
  padding: ${rem(8)} ${rem(20)};
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.purple};
  box-shadow: 0 0 4px rgba(0, 0, 0, .7);
`;
