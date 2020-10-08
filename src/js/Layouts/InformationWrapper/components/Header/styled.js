import styled from 'styled-components';
import { rem } from 'polished';

export const Heading = styled.div`
  width: 100%;
  border-radius: ${rem(30)};
  background-color: #6D71F9BF;
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
`;

export const UserImage = styled.img`
  border-radius: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  z-index: 2;
`;

export const Progress = styled.img``;

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

  img {
    padding: ${rem(10)};
    border-radius: 100%;
    background-color: #ffffff7a;
    margin: ${rem(10)};
  }
`;
