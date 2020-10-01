import styled from 'styled-components';
import { rem } from 'polished';

import * as g from '@Global/generic';

import Button from '@Components/Button';

export const Navigation = styled.div`
  width: 100%;
  flex: 0.5;
  display: flex;
  justify-content: flex-end;
`;

export const MenuWrapper = styled.div`
  width: 35%;
  height: auto;
`;

export const MenuOption = styled(Button)`
  border-radius: 10px 0 0 10px;
  width: 100%;
  padding: ${rem(15)} 0;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  color: white;
  background-color: transparent;
  white-space: nowrap;
  ${g.transition('background', '400ms')};

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    ${g.transition('background', '400ms')};
  }

  &.is-active {
    color: ${({ theme }) => theme.blue};
    font-size: 16px;
    background-color: white;
    ${g.transition('background', '400ms')};
  }
`;
