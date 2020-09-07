import styled from 'styled-components';
import { rem } from 'polished';

import Form from '@Components/Form';
import Button from '@Components/Button';

export const FormData = styled(Form)`
  padding: ${rem(14)} ${rem(44)};
`;

export const Label = styled.label`
  font-size: ${rem(16)};
  color: #909090;
  display: block;
  width: 50%;

  /** */
  ${({ theme }) => theme.mq.lessThan('md')`
    font-size: ${rem(12)};
  `}
`;

export const Input = styled.input`
  border-bottom: 1px solid #707070;
  padding: ${rem(4)} 0;
  width: 100%;
  border-radius: 0;
  transition: opacity 200ms ease-in-out;

  &:read-only {
    cursor: not-allowed;
  }

  &.is--loading {
    opacity: 0.3;
  }
`;

export const InputWrapper = styled.div`
  display: inline-block;

  &.has-error {
    ${Input} {
      border-color: red;
    }

    ${Label} {
      color: red;
    }
  }

  & + & {
    margin-top: ${rem(11)};

    /** */
    ${({ theme }) => theme.mq.lessThan('sm')`
      margin-top: ${rem(8)};
    `}
  }

  &.is-row {
    width: 100%;
  }

  &:not(.is-row) {
    width: calc(50% - 14px);

    &:not(.is-spaced) {
      margin-right: ${rem(14)};
    }
  }

  &.is-spaced {
    margin-left: ${rem(14)};
  }
`;

export const Submit = styled(Button)`
  width: 30%;
  margin: 0 auto;
  margin-top: ${rem(38)};
  display: block;

  /** */
  ${({ theme }) => theme.mq.lessThan('md')`
    margin-top: ${rem(14)};
  `}
`;
