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
  font-size: ${rem(18)};
  color: white;
  font-weight: bold;
  border-radius: ${rem(10)};
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
  ${({ theme }) => theme.flexCentered};
  justify-content: flex-start;
  padding-left: ${rem(50)};
  position: relative;

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

  &:last-of-type {
    justify-content: center;
  }

  &:nth-of-type(2n) {
    margin-left: ${rem(38)};
    justify-content: flex-start;
  }
`;

export const RadioIcon = styled.img`
  width: ${rem(30)};
  position: absolute;
  left: ${rem(10)};
`;

export const ScoreWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Score = styled.input`
  border-bottom: ${rem(1.5)} solid #707070;
  padding: ${rem(8)} ${rem(6)};
  transition: opacity 200ms ease-in-out;
  margin-top: ${rem(20)};
  width: ${rem(270)};
  color: ${({ theme }) => theme.purple};
  font-size: ${rem(17)};
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    border-color: ${({ theme }) => theme.purple};
  }

  &.has--error {
    border-color: red;
    color: red;

    &::placeholder {
      color: red;
    }
  }
`;
