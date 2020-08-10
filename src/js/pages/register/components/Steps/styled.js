import styled from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

export const StepWrapper = styled.div`
  flex: 0.3;
  padding: ${rem(50)};
  padding-bottom: 0;
  height: calc(90% - 50px);
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: 380px;
`;

export const Step = styled.div`
  display: flex;
  flex-flow: column;
  width: 95%;
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

  &.active {
    &::before {
      transition: background-color 400ms;
      background-color: ${({ theme }) => theme.purple};
    }
  }

  &::before {
    content: '';
    border-radius: 100%;
    width: 24px;
    height: 24px;
    border: 2px solid #929292;
    position: absolute;
    left: 10px;
    padding: ${rem(3)};
    background-clip: content-box;
    transition: background-color 400ms;
  }
`;

export const StepTitle = styled(Button)`
  font-weight: 400;
  color: ${({ theme }) => theme.blue};
  margin-bottom: ${rem(40)};
  text-align: center;

  &:nth-child(1),
  &:nth-child(2) {
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
          background-color: ${({ theme }) => theme.purple};
          transition: background-color 400ms;
        }
      }
    }
  }
`;

export const Submit = styled(Button)`
  width: 90%;
  margin: 0 auto;
`;

export const Subtitle = styled.h2`
  width: 50%;
  text-align: center;
  font-weight: 400;
  font-size: ${rem(30)};
  margin-bottom: ${rem(40)};
  color: ${({ theme }) => theme.darkPurple};
  ${({ theme }) => theme.mq.lessThan('1380px')`
    font-size: ${rem(26)};
    width: 55%;
  `}
`;
