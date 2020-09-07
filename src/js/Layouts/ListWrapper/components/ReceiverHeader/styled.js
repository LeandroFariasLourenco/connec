import styled from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

export const HeaderNotify = styled.div`
  width: 100%;
  height: ${rem(48)};
  margin-bottom: ${rem(17)};
  background: ${({ theme }) => theme.purple};
  color: white;
  font-size: ${rem(14)};
  display: flex;
  align-items: center;
  padding: ${rem(15)} ${rem(13)};
`;

export const HeaderText = styled.span`
  padding-left: ${rem(2)};
  display: flex;
  align-items: center;
  font-weight: bold;

  img {
    margin-right: ${rem(22)};
  }

  > span {
    margin-right: ${rem(5)};

    &[data-receiver="0"] {
      display: none;
    }
  }
`;

export const HeaderWrapper = styled.div`
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

export const HeaderRegister = styled(Button)`
  text-transform: capitalize;
  border: 1px solid ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.purple};
  font-size: ${rem(16)};
  padding: ${rem(8)} ${rem(26)};
  margin-bottom: ${rem(12)};
`;
