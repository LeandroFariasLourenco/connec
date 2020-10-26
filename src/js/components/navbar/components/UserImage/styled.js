import styled from 'styled-components';

import { rem } from 'polished';

import Button from '@Components/Button';

export const ImageWrapper = styled.div`
  position: relative;
`;

export const UserImage = styled.img`
  width: ${rem(42)};
  height: ${rem(42)};
  border-radius: 100%;
`;

export const NotificationCounter = styled(Button)`
  padding: ${rem(3)} ${rem(7)};
  color: white;
  font-weight: bold;
  font-size: ${rem(14)};
  position: absolute;
  right: 0;
  bottom: 0;
  background: #6dc9fa;
  border-radius: 100%;
`;
