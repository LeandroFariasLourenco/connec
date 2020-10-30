import styled from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

export const Content = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  background-color: rgb(109, 113, 249, 0.6);
  padding: ${rem(20)};
  border: ${rem(2)} solid rgb(109, 113, 249);
  border-radius: ${rem(20)};

  & + & {
    margin-top: ${rem(20)};
  }
`;

export const PopupWrapper = styled.div`
  width: 100%;
  height: ${rem(500)};
  display: flex;
  flex-flow: column;
  overflow: auto;
  position: relative;
  padding: ${rem(30)} ${rem(30)} ${rem(50)};
  border: ${rem(2)} solid ${({ theme }) => theme.purple};
  border-radius: ${rem(10)};

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
`;

export const Middle = styled.div`
  margin: 0 ${rem(20)};
  flex: 1;
`;

export const TrackerCode = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;

  svg {
    margin-bottom: ${rem(10)};
    width: ${rem(60)};
    height: ${rem(60)};
    fill: #fff;
  }
`;

export const DateSpan = styled.div`
  text-align: center;
  font-size: ${rem(18)};
  margin-top: ${rem(20)};
  color: #fff;
`;

export const OptionsToChoose = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${rem(25)};
  color: #fff;
`;

export const Accept = styled(Button)`
  margin-left: ${rem(20)};
`;

export const Reject = styled(Button)`
  background-color: red;
`;
