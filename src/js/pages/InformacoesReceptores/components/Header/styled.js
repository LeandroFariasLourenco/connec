import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const Heading = styled.div`
  width: 100%;
  border-radius: ${rem(30)};
  background-color: #6D71F9BF;
  padding: ${rem(44)} ${rem(32)};
  min-height: ${rem(210)};
  display: flex;
  box-shadow: 0 ${rem(3)} ${rem(6)} #00000040;
`;

const information = css`
  color: #fff;
  font-size: ${rem(16)};
`;

export const UserImage = styled.div`
  height: ${rem(138)};
  width: ${rem(138)};
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: ${rem(142)};
    width: 100%;
    background-color: #fff;
    border-radius: 100%;
    z-index: 1;
  }

  img {
    border-radius: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    z-index: 2;
  }
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

export const UserBirthDate = styled.span`
  ${information}
`;

export const UserRegister = styled.span`
  ${information}
  margin: ${rem(10)} 0;
`;

export const UserAddress = styled.span`
  ${information}
`;
