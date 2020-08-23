import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.li`
  cursor: pointer;
`;

export const Title = styled.span`
  display: block;
  margin-top: ${rem(11)};

  ${({ theme }) => theme.mq.lessThan('md')`
    font-size: ${rem(11)};
  `}
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
  transition: 400ms;

  &.active {
    background-color: ${({ theme }) => theme.purple};
    border: none;
  }

  &:not(.active):hover {
    background-color: rgb(109, 113, 249, 0.2);
    transition: 400ms;
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
