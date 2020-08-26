import styled from 'styled-components';
import { rem } from 'polished';

export const ListWrapper = styled.div`
  width: 100%;
  height: 75%;
  padding-top: ${rem(10)};
  padding-right: ${rem(5)};
`;

export const Table = styled.table`
  margin-top: ${rem(26)};
  overflow: auto;
  width: 100%;
  
  &::-webkit-scrollbar {
    width: ${rem(6)};
  }

  &::-webkit-scrollbar-thumb {
    background: #7E7E7E;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: white;
    border: 1px solid #7E7E7E;
    border-radius: 10px;
  }
`;

export const THead = styled.thead``;

export const Head = styled.th`
  font-size: ${rem(16)};
  font-weight: 500;
  padding-bottom: ${rem(13)};
`;

export const Body = styled.tbody`
  width: 100%;
`;

export const Data = styled.td`
  text-align: center;
`;

export const Row = styled.tr`
  padding-bottom: ${rem(13)};
`;
