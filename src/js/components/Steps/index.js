import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { setActiveStep, resetStep } from '@Store/ducks/register';

import * as S from './styled';

const Steps = ({
  subTitle,
  stepOptions
}) => {
  const { currentStep, buttonTitle } = useSelector(state => state.register);
  const dispatch = useDispatch();

  const handleStep = () => {
    if (currentStep >= 2) return;
    dispatch(setActiveStep(currentStep + 1));
  };

  useEffect(() => {
    dispatch(resetStep());
  }, []);

  return (
    <S.StepWrapper>
      <S.Subtitle>
        {subTitle}
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
  subTitle: PropTypes.string.isRequired,
  stepOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    stepNumber: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default memo(Steps);
