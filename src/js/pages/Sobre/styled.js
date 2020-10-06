import styled from 'styled-components';
import { rem } from 'polished';

import { fullSection } from '@Global/generic';

export const Wrapper = styled.div`
  ${fullSection};
`;

export const AboutUs = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  span {
    max-width: ${rem(400)};
    font-size: ${rem(18)};
    line-height: ${rem(23)};
    border: ${rem(1)} solid green;
    border-radius: ${rem(10)};
    padding: ${rem(20)} ${rem(10)};
    background-color: rgba(134, 214, 84, 0.2);
    color: rgba(0, 0, 0, 0.75);
    transition: 200ms ease-in-out;

    &:hover {
      background-color: rgba(134, 214, 84, 0.4);
      transform: scale(1.1);
    }

    &::first-letter {
      margin-left: ${rem(10)};
    }

    &:not(:last-of-type) {
      margin: ${rem(15)} 0;
    }
  }
`;
