import styled, { css } from 'styled-components';
import { rem } from 'polished';

import Form from '@Components/Form';
import Button from '@Components/Button';

export const FormWrapper = styled(Form)`
  padding: ${rem(14)} ${rem(44)};
  margin-top: ${rem(60)};
  height: calc(90% - 77px);
  display: flex;
  flex-flow: column;
`;

export const OptionsWrapper = styled.div`
  width: 100%;
  flex: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
`;

export const Label = styled.label`
  width: ${rem(184)};
  height: ${rem(39)};
  font-size: ${rem(19)};
  color: white;
  font-weight: bold;
  border-radius: ${rem(10)};
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
  ${({ theme }) => theme.flexCentered};

  &:not(.is--selected) {
    background: #bdc1d5;
  }
`;

export const Radio = styled.input`
  width: 100%;
  position: absolute;
  opacity: 0;
  height: 100%;
  cursor: pointer;

  &:checked {
    + ${Label} {
      background-color: ${({ theme }) => theme.purple};
    }
  }
`;

export const RadioWrapper = styled.div`
  width: calc(50% - 38px);
  display: flex;
  justify-content: flex-end;
  position: relative;

  &:nth-of-type(2n) {
    margin-left: ${rem(38)};
    justify-content: flex-start;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 0.3;
  padding-bottom: ${rem(27)};
`;

const button = css`
  width: 30%;
  height: ${rem(33)};
`;

export const GoBack = styled(Button)`
  ${button};
`;

export const Continue = styled(Button)`
  ${button};
`;
