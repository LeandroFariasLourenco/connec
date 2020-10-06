import styled, { css } from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 0.3;
  padding-bottom: ${rem(27)};

  &.centered {
    justify-content: center;
  }

  &:not(.centered) {
    justify-content: space-between;
  }
`;

const button = css`
  width: 30%;
  height: ${rem(33)};
  margin: 0 ${rem(5)};

  &.hidden {
    display: none;
  }
`;

export const GoBack = styled(Button)`
  ${button};
`;

export const Continue = styled(Button)`
  ${button};
`;
