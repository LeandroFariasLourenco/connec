import styled from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

export const FormWrapper = styled.section`
  flex: 0.9;
  max-width: ${({ theme }) => rem(theme.maxContainerWidth)};
`;

export const BackButton = styled(Button)`
  width: 100%;
  height: ${rem(90)};
  display: flex;
  align-items: flex-end;
  padding-left: ${rem(90)};
`;

export const RegisterFormWrapper = styled.div`
  width: 100%;
  height: calc(100% - 6.625rem);
`;

export const GoBack = styled.img``;
