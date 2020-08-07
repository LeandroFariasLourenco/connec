import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import { setActiveStep } from '@Store/ducks/register';
import Button from '@Components/button';
import registerSteps from '@Utils/registerSteps';

import * as S from './styled';

const Steps = () => {
  const { currentStep, buttonTitle } = useSelector(state => state.register);
  console.log(currentStep);
  console.log(buttonTitle);
  const dispatch = useDispatch();

  const handleStep = () => {
    console.log(currentStep);
  };

  return (
    <S.StepWrapper>
      <S.Step>
        { registerSteps.map(({ id, title, stepNumber }) => (
          <S.StepTitle
            reset
            key={id}
            title={title}
            text={title}
            handler={() => dispatch(setActiveStep(stepNumber))}
            classNames={cx(currentStep === stepNumber ? 'active' : 'pênis')}
          />
        ))}
        <Button
          handler={handleStep}
          title={buttonTitle}
          text={buttonTitle}
        />
      </S.Step>
    </S.StepWrapper>
  );
};

export default Steps;
