import styled from 'styled-components';
import { rem } from 'polished';

export const Heading = styled.div`
  width: 100%;
  border-radius: ${rem(30)};
  background-color: #6d71f9bf;
  padding: ${rem(44)} ${rem(32)};
  min-height: ${rem(210)};
  display: flex;
  box-shadow: 0 ${rem(3)} ${rem(6)} #00000040;
  position: relative;
`;

export const ImageWrapper = styled.div`
  height: ${rem(195)};
  width: ${rem(138)};
  position: relative;
  ${({ theme }) => theme.flexCentered};
  margin-left: ${rem(10)};

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }

  circle {
    transition: stroke-dashoffset 0.35s;
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
  }
`;

export const UserImage = styled.img`
  border-radius: 100%;
  width: 100%;
  height: ${rem(140)};
  object-fit: cover;
  z-index: 2;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: ${rem(58)};
`;

export const UserTitle = styled.h2`
  color: #fff;
  font-size: ${rem(32)};
  font-weight: 500;
  margin-bottom: ${rem(10)};
`;

export const UserBasicInfo = styled.span`
  color: #fff;
  font-size: ${rem(16)};
  margin: ${rem(5)} 0;
`;

export const UserContact = styled.div`
  position: absolute;
  right: ${rem(40)};
  bottom: ${rem(20)};

  button {
    width: ${rem(60)};
    border-radius: 100%;
    background-color: #ffffff7a;
    margin: 0 ${rem(5)};
  }

  img {
    padding: ${rem(2.5)};
    margin: ${rem(10)};
  }
`;

export const Score = styled.div`
  position: absolute;
  bottom: ${rem(-25)};
  color: #fff;
  width: 100%;

  .number,
  .text {
    display: block;
    text-align: center;
  }

  .number {
    font-size: ${rem(20)};
    font-weight: bold;
  }

  .text {
    font-size: ${rem(14)};
  }
`;
