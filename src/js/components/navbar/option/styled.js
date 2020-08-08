import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.li`
  cursor: pointer;
`;

export const Title = styled.span`
  display: block;
  margin-top: ${rem(11)};
`;

export const Handler = styled.button`
  background: transparent;
`;

export const LogoWrapper = styled.div`
  width: ${rem(30)};
  height: ${rem(30)};
  border: 1px solid #707070;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: ${({ theme }) => theme.purple};
    border: none;
  }
`;

export const Logo = styled.img`
  &.active {
    + img {
      display: none;
    }
  }

  &.default {
    display: none;
  }
`;
