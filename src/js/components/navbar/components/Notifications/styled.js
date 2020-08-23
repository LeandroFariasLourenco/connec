import styled from 'styled-components';

import { rem } from 'polished';

export const PopupWrapper = styled.div`
  z-index: -1;
  background: white;
  transform: scale(0);
  border-radius: 20px;
  width: ${rem(230)};
  height: ${rem(170)};
  transition: 400ms;
  position: absolute;
  left: 0;
  top: -100%;

  &.is--open {
    transform: scale(1);
    transition: 400ms;
    box-shadow: 0px 3px 6px #00000029;
    z-index: ${({ theme }) => theme.zIndexes.notification};
  }
`;

export const Footer = styled.div`
  background: #6DC9FA;
  width: 100%;
  height: ${rem(30)};
  position: absolute;
  bottom: 0;
  border-radius: 0 0 20px 20px;
`;
