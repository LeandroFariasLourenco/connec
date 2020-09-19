import styled from 'styled-components';
import { rem } from 'polished';

import { Wrapper } from '@Layouts/FormWrapper/components/Frames/styled';
import { StepWrapper } from '@Components/Steps/styled';

import Button from '@Components/Button';

export const BackButton = styled(Button)`
  height: ${rem(90)};
  display: flex;
  align-items: flex-end;
  padding-left: ${rem(90)};
`;

export const RegisterFormWrapper = styled.div`
  width: 100%;
  margin-top: ${rem(58)};
  height: calc(100% - 58px);

  ${({ theme }) => theme.mq.lessThan('md')`
    margin-top: ${rem(24)};
    height: calc(100% - 24px);
  `}

  ${StepWrapper} {
    padding-left: unset;
  }

  ${Wrapper} {
    margin-left: unset;
  }
`;
