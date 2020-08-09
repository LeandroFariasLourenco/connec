import styled from 'styled-components';
import { rem } from 'polished';

import BackgroundImage from '@Images/dashboard/background.png';

export const InformationWrapper = styled.div`
  width: 75%;
  height: 80%;
  margin-left: ${rem(200)};
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    display: block;
    background: white;
    height: 70%;
    width: 25%;
    position: absolute;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    left: 0;
    z-index: -1;
  }

  &::before {
    bottom: 0;
    width: 23%;
    left: 1%;
  }

  &::after {
    width: 24%;
    left: 0.5%;
    bottom: ${rem(20)};
  }
`;

export const Title = styled.h2`
  color: black;
  font-weight: 500;
  font-size: ${rem(34)};
  margin-bottom: ${rem(40)};
`;

export const Background = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background-image: url(${BackgroundImage});
  background-position: right;
  background-repeat: no-repeat;
  width: 600px;
  height: 820px;
  background-size: 700px;
  transform: translate(5%, 39%);
`;
