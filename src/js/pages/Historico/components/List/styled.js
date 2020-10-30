import styled, { css, keyframes } from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

const notify = keyframes`
  from {
    box-shadow: 0 0 0 #fcba03;
  }

  to {
    box-shadow: 0 0 ${rem(5)} ${rem(3)} #fcba03;
  }
`;

const tableFill = css`
  width: 100%;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 75%;
  padding-top: ${rem(15)};
  padding-right: ${rem(5)};
`;

export const Table = styled.table`
  margin-top: ${rem(26)};
  width: 100%;
  height: calc(100% - (37px + 26px));
`;

export const THead = styled.thead`
  ${tableFill}
  display: block;
`;

export const Head = styled.th`
  font: normal 16px/19px;
  padding-bottom: ${rem(13)};
  flex: 1;
`;

export const Body = styled.tbody`
  ${tableFill}
  display: block;
  max-height: ${rem(530)};
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: ${rem(6)};
  }

  &::-webkit-scrollbar-thumb {
    background: #7e7e7e;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: white;
    border: 1px solid #7e7e7e;
    border-radius: 10px;
  }
`;

export const Data = styled.td`
  text-align: center;
  padding: ${rem(15)} 0;
  flex: 1;
  ${({ theme }) => theme.flexCentered}

  &.is--icon {
    svg {
      width: ${rem(30)};
    }
  }

  span {
    display: block;
    width: ${rem(140)};
    padding: ${rem(5)} 0;
    margin: 0 auto;
    border-radius: ${rem(22)};
    box-shadow: 0 ${rem(3)} ${rem(6)} #00000029;
    color: white;
    text-transform: uppercase;
    font: normal 8px/10px;

    &.is {
      &--pendent {
        background-color: #fcba03;
        animation-name: ${notify};
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
      }

      &--aproved {
        background: #00ef18;
      }
 
      &--denied {
        background: #ef0000;
      }
    }
  }
`;

export const Row = styled.tr`
  width: 100%;
  display: flex;

  &.has--data {
    border-radius: ${rem(3)};
    box-shadow: 0 ${rem(3)} ${rem(6)} #00000029;
    border-bottom: 1rem transparent;

    & + & {
      margin: ${rem(16)} 0;
    }
  }
`;

export const OpenPopup = styled(Button)`
  color: #fff;
`;
