import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import { setActiveStep } from '@Store/ducks/register';
import registerSteps from '@Utils/registerSteps';

import * as S from './styled';

const Steps = () => {
  const { currentStep, buttonTitle } = useSelector(state => state.register);
  const dispatch = useDispatch();

  const handleStep = () => {
    if (currentStep >= 2) return;
    dispatch(setActiveStep(currentStep + 1));
  };

  return (
    <S.StepWrapper>
      <S.Subtitle>
        Cadastro do Doador
      </S.Subtitle>

      <S.Step>
        { registerSteps.map(({ id, title, stepNumber }) => {
          const currentActive = currentStep === stepNumber && 'active';
          const completedSteps = currentStep > stepNumber && 'completed';

          return (
            <S.StepTitle
              reset
              key={id}
              title={title}
              handler={() => dispatch(setActiveStep(stepNumber))}
            >
              <S.StepOption
                className={cx(currentActive, completedSteps)}
              >
                {title}
              </S.StepOption>
            </S.StepTitle>
          );
        })}
        <S.Submit
          handler={handleStep}
          title={buttonTitle}
          text={buttonTitle}
        />
      </S.Step>
    </S.StepWrapper>
  );
};

export default Steps;
