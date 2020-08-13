import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { setActiveStep } from '@Store/ducks/register';

import * as S from './styled';

const Steps = ({
  subtitle,
  stepOptions
}) => {
  const { currentStep, buttonTitle } = useSelector(state => state.register);
  const dispatch = useDispatch();

  const handleStep = () => {
    if (currentStep >= 2) return;
    dispatch(setActiveStep(currentStep + 1));
  };

  return (
    <S.StepWrapper>
      <S.Subtitle>
        {subtitle}
      </S.Subtitle>

      <S.Step>
        { stepOptions.map(({ id, title, stepNumber }) => {
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

Steps.propTypes = {
  subtitle: PropTypes.string.isRequired,
  stepOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    stepNumber: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default memo(Steps);
