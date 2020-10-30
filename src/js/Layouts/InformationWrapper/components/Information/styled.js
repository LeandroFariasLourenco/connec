import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${rem(1360)};
  padding-top: ${rem(19)};
  display: flex;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  color: #000000bd;
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
  width: calc(25% - 10px);
  background-color: #fff;
  border-radius: ${rem(20)};
  border: ${rem(0.2)} solid rgba(0, 0, 0, 0.3);
  padding: ${rem(20)} ${rem(40)};
  transition: 300ms ease-in-out;
  padding-left: ${rem(25)};
  margin-right: ${rem(10)};
  margin-left: ${rem(10)};

  &:nth-of-type(3n + 4),
  &:nth-of-type(2n + 4),
  &:nth-of-type(1n + 4) {
    margin-top: ${rem(15)};
  }

  img {
    max-width: ${rem(50)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.purple};

    ${Content} {
      color: #fff;

      &::before {
        border-color: #fff;
      }
    }
  }
`;
