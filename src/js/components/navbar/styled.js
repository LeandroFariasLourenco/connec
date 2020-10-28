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

export const SacWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const SacInfo = styled.a`
  background-color: #6dc9fa;
  width: 90%;
  border-top-left-radius: ${rem(10)};
  border-bottom-left-radius: ${rem(10)};
  font-size: ${rem(13)};
  ${({ theme }) => theme.flexCentered};
  padding: ${rem(5)};
  margin-bottom: ${rem(10)};
  color: #fff;
  white-space: nowrap;

  /** */
  ${({ theme }) => theme.mq.lessThan('md')`
    width: 100%;
  `}

  &:visited {
    color: #fff;
  }

  svg {
    margin-right: ${rem(10)};
  }
`;
