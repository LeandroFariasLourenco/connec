import styled from 'styled-components';
import { rem } from 'polished';

import Form from '@Components/Form';

export const FormWrapper = styled(Form)`
  padding: ${rem(14)} ${rem(44)};
  margin-top: ${rem(60)};
  height: calc(90% - 77px);
  display: flex;
  flex-flow: column;
`;

export const NotificationText = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-size: ${rem(16)};
  margin-bottom: ${rem(10)};
  color: #666;
`;

export const ChooseImage = styled.input`
  display: none;
`;

export const InputFileLabel = styled.label`
  width: ${rem(160)};
  height: ${rem(160)};
  display: block;
  margin: ${rem(30)} auto;
  cursor: pointer;

  img {
    &.image-selected {
      border-radius: 100%;
    }

    height: 100%;
    width: 100%;
  }
`;
