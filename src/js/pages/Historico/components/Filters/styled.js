import styled from 'styled-components';

import { rem } from 'polished';
import Button from '@Components/Button';

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  padding-bottom: ${rem(18)};
`;

export const Filter = styled(Button)`
  font-size: ${rem(15)};
  text-transform: uppercase;
  position: relative;
  transition: 400ms;

  &::after {
    content: '';
    width: 0;
    height: 4px;
    position: absolute;
    transition: 400ms;  
    transform: translateY(21px);
    bottom: 0;
  }

  &:nth-of-type(2) {
    text-align: center;
  }

  &.is--active {
    color: #6DC9FA;

    &::after {
      width: 100%;
      background: #6DC9FA;
      border-radius: 10px;
    }
  }
`;
