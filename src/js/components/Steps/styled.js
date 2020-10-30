import styled, { css } from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

const changeColor = css`
  border-color: ${({ theme }) => theme.purple};
  transition: background-color 400ms;
  background-color: ${({ theme }) => theme.purple};
`;

export const StepWrapper = styled.div`
  flex: 0.25;
  padding: ${rem(50)};
  padding-right: ${rem(25)};
  padding-bottom: 0;
  height: calc(90% - 50px);
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: 380px;

  /** */
  ${({ theme }) => theme.mq.lessThan('sm')`
    padding-left: ${rem(25)};
  `}
`;

export const Step = styled.div`
  display: flex;
  flex-flow: column;
  width: 85%;
  padding-left: ${rem(20)};
`;

export const StepOption = styled.span`
  width: 100%;
  height: 24px;
  padding-left: ${rem(50)};
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${rem(17.5)};
  color: ${({ theme }) => theme.blue};
  transition: background-color 400ms;

  /** */
  ${({ theme }) => theme.mq.lessThan('sm')`
    font-size: ${rem(14)};
  `}

  &.active {
    &::before {
      ${changeColor}
    }
  }

  &::before {
    content: '';
    border-radius: 100%;
    width: ${rem(24)};
    height: ${rem(24)};
    border: ${rem(1)} solid #929292;
    position: absolute;
    left: ${rem(10)};
    padding: ${rem(4)};
    background-clip: content-box;
    transition: background-color 400ms;
  }
`;

export const StepTitle = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.blue};
  margin-bottom: ${rem(40)};
  text-align: center;

  &:not(:last-of-type) {
    ${StepOption} {
      &::after {
        content: '';
        height: ${rem(40)};
        width: ${rem(2)};
        background: #707070;
        position: absolute;
        left: ${rem(21)};
        top: ${rem(24)};
        transition: background-color 400ms;
      }

      &.completed {
        &::before,
        &::after {
          ${changeColor}
        }
      }
    }
  }
`;

export const Submit = styled(Button)`
  width: 90%;
  margin: 0 auto;
  opacity: 0;
  transition: opacity 200ms ease-in-out;

  &.is--shown {
    opacity: 1;
  }
`;

export const Subtitle = styled.h2`
  width: 70%;
  text-align: center;
  font-weight: 400;
  font-size: ${rem(34)};
  margin-bottom: ${rem(40)};
  color: ${({ theme }) => theme.darkPurple};

  /** */
  ${({ theme }) => theme.mq.lessThan('sm')`
    font-size: ${rem(30)};
  `}
`;
