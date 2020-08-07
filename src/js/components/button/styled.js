import styled from 'styled-components';
import { rem } from 'polished';

export const Button = styled.button`
  &:not(.reset-style) {
    padding: ${rem(8)} ${rem(20)};
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.purple};
  }
`;
