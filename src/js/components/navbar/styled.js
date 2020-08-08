import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  flex: 0.10;
  height: 100%;
  flex-flow: column;
  display: flex;
  padding-top: 50px;
  justify-content: center;
  background: white;

  li {
    &:not(:first-of-type) {
      margin-top: ${rem(32)};
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
  height: ${rem(300)};
`;

export const Navigation = styled.nav`
  margin-top: 70px;
  width: 100%;
`;

export const Sac = styled.span``;
