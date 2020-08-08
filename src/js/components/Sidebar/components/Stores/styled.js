import styled from 'styled-components';

export const StoreWrapper = styled.div`
  width: 100%;
  flex: 0.3;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`;

export const StoreLogo = styled.img`
  width: 100px;

  &:nth-of-type(2) {
    transform: translate(10px, -20px);
  }
`;
