import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  width: 10%;
  height: 100%;
  flex-flow: column;
  display: flex;
  justify-content: space-between;
  padding-top: ${rem(50)};
  background: white;
  position: absolute;
  left: 0;
  top: 0;

  li {
    &:not(:first-of-type) {
      margin-top: ${rem(32)};

      ${({ theme }) => theme.mq.lessThan('md')`
        margin-top: ${rem(16)};
      `}
    }
  }
`;

export const Logo = styled.img``;

export const Options = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  margin-top: ${rem(70)};
  width: 100%;

  ${({ theme }) => theme.mq.lessThan('md')`
    margin-top: ${rem(40)};
  `}
`;

export const Sac = styled.span``;
