import styled, { css } from 'styled-components';
import { rem } from 'polished';

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
  overflow: auto;
  width: 100%;
  height: calc(100% - (37px + 26px));
`;

export const THead = styled.thead`
  ${tableFill}
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

  span {
    display: block;
    width: ${rem(100)};
    padding: ${rem(5)} 0;
    margin: 0 auto;
    border-radius: ${rem(22)};
    box-shadow: 0 ${rem(3)} ${rem(6)} #00000029;
    color: white;
    text-transform: uppercase;
    font: normal 8px/10px;

    &.aproved {
      &-false {
        background: #ef0000;
      }

      &-true {
        background: #00ef18;
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
