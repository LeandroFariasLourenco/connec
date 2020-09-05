import styled from 'styled-components';

import { rem } from 'polished';

import { transition } from '@Global/generic';
import Button from '@Components/Button';

export const ListWrapper = styled.ul`
  padding: 0 ${rem(31)};
  padding-bottom: ${rem(20)};
  width: 100%;
  height: calc(100% - 92px);
  overflow: auto;
  position: relative;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border: 1px solid #7e7e7e;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #7e7e7e;
    border-radius: 10px;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1.5px;
    background: #707070;
    transform: translate(-1%);
  }
`;

export const Receiver = styled.li`
  width: 100%;
  padding: ${rem(20)};
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  color: #606060;
  font-size: ${rem(20)};
  ${transition('box-shadow', '200ms')};

  &:hover {
    box-shadow: 0 7px 15px -5px rgba(0,0,0,0.25);
    cursor: pointer;
    ${transition('box-shadow', '200ms')};
  }

  > span {
    display: flex;
    align-items: center;
  }

  &:first-of-type {
    margin-top: ${rem(20)};
  }
`;

export const ReceiverThumb = styled.img`
  border-radius: 100%;
  width: ${rem(45)};
  height: ${rem(45)};
  object-fit: cover;
`;

export const ReceiverName = styled.span`
  flex: 1;
  padding-left: ${rem(70)};
`;

export const ReceiverRegisterDate = styled.span`
  flex: 1;
`;

export const ReceiverCount = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const ReceiverDetails = styled(Button)`
  transform: rotate(180deg);

  img {
    ${transition('transform', '400ms')}
  }

  &:hover {
    img {
      border-radius: 100%;
      ${transition('transform', '400ms')}
      transform: scale(1.1) translateX(-7px);
    }
  }
`;
