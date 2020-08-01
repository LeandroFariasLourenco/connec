import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  flex: 0.15;
  height: 100%;
  flex-flow: column;
  display: flex;
  padding-top: 50px;
  
  nav {
    margin-top: 70px;
    width: 100%;

    ul {
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      height: ${rem(300)};
    }
  }
`;
