import styled, { keyframes } from 'styled-components';

import { rem } from 'polished';

import Button from '@Components/Button';

const notify = keyframes`
  from {
    box-shadow: 0 0 0 #6dc9fa;
  }

  to {
    box-shadow: 0 0 ${rem(10)} ${rem(7)} #6dc9fa;
  }
`;

export const ImageWrapper = styled(Button)`
  position: relative;
`;

export const UserImage = styled.img`
  width: ${rem(42)};
  height: ${rem(42)};
  border-radius: 100%;

  &.has--notify {
    animation-name: ${notify};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  }
`;
