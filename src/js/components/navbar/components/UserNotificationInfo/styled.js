import styled from 'styled-components';

import { rem } from 'polished';

export const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  text-align: center;
  color: #fff;
`;

export const UserType = styled.span`
  font-size: ${rem(30)};
  text-align: center;
  margin-bottom: ${rem(20)};
  color: #fff;

  span {
    text-decoration: underline;
  }

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const OrganInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  color: #fff;
  font-size: ${rem(20)};
  font-weight: bold;

  img {
    width: ${rem(60)};
  }
`;

export const ReceiverThumb = styled.img`
  border-radius: 100%;
  width: ${rem(60)};
  height: ${rem(60)};
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: ${rem(20)};
  text-decoration: none;
`;

export const BloodType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${rem(20)};
  font-size: ${rem(20)};
  font-weight: bold;

  svg {
    margin-right: ${rem(20)};
  }
`;
