import styled from 'styled-components';
import { rem } from 'polished';

export const List = styled.li`
  cursor: pointer;

  div {
    width: ${rem(30)};
    height: ${rem(30)};
    border: 1px solid #707070;
    margin: 0 auto;
    border-radius: 10px;
  }

  span {
    display: block;
    margin-top: ${rem(11)};
  }
`;
