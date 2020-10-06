import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const LoaderWrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${theme.zIndexes.loader};
    width: ${rem(610)};
    display: flex;
    align-items: center;
    flex-flow: column;
    border: ${rem(1)} solid ${theme.purple};
    border-radius: ${rem(20)};
    padding: ${rem(30)};
    color: ${theme.purple};
    font-size: ${rem(18)};
    font-weight: bold;
    background: #fff;
  `}
`;
