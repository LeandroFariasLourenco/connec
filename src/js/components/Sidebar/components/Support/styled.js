import styled from 'styled-components';

export const SupportWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: 10px;
  padding-left: 30px;
  flex: 0.2;
`;

export const SupportLogo = styled.img`
  width: 20px;
`;

export const Phone = styled.p`
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  padding: 0 10px;
  color: white;

  span {
    margin: 0 5px;
  }
`;
