import styled, { css } from 'styled-components';

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
  transition: opacity 400ms;
`;

export const InformationTitle = styled.h2`
  ${({ theme }) => css`
    display: block;
    text-align: center;
    font-size: ${rem(20)};
    margin-bottom: ${rem(5)};
    color: ${theme.darkPurple};
  `}
`;

export const Information = styled.span`
  ${({ theme }) => css`
    display: block;
    padding-left: ${rem(10)};
    font-size: ${rem(12)};
    line-height: ${rem(20)};

    &::first-letter {
      margin-left: ${rem(5)};
    }

    i {
      color: ${theme.purple};
      font-weight: bold;
      font-style: normal;
      margin: 0 ${rem(4)};
    }
  `}
`;

export const InformationText = styled.div`
  flex: 0.5;
  display: block;
  margin: 0 auto;
`;
