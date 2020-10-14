import styled from 'styled-components';

import { rem } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: ${rem(19)};
  display: flex;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  color: #000000BD;
  font-size: ${rem(20)};
  font-weight: bold;
  align-items: center;
  transition: 300ms ease-in-out;

  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    width: ${rem(0.5)};
    border: ${rem(0.2)} solid #000;
    transition: 300ms ease-in-out;
    margin: 0 ${rem(15)};
  }
`;

export const InfoBlock = styled.div`
  display: inline-flex;
  align-items: center;
  height: ${rem(86)};
  max-width: ${rem(320)};
  width: calc(33.33% - 10px);
  background-color: #fff;
  border-radius: ${rem(20)};
  border: ${rem(0.2)} solid rgba(0, 0, 0, 0.3);
  padding: ${rem(20)} ${rem(40)};
  transition: 300ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.purple};

    ${Content} {
      color: #fff;

      &::before {
        border-color: #fff;
      }
    }
  }

  &.has--organ {
    padding-left: ${rem(25)};

    img {
      max-width: ${rem(50)};
    }
  }

  & + & {
    margin: 0 ${rem(10)};
  }
`;
