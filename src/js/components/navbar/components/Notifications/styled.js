import styled from 'styled-components';
import { rem } from 'polished';

export const Footer = styled.div`
  background: #6dc9fa;
  width: 100%;
  height: 10%;
  border-radius: 0 0 ${rem(20)} ${rem(20)};
`;

export const Content = styled.div`
  height: 90%;
  width: 100%;
  background-color: white;
`;

export const PopupWrapper = styled.div`
  width: 100%;
  height: ${rem(500)};
  display: flex;
  flex-flow: column;
`;
