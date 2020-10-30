import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { resetStep } from '@Store/ducks/register';

import * as S from './styled';

const Steps = ({
  subTitle,
  stepOptions
}) => {
  const { currentStep } = useSelector(state => state.register);
  const dispatch = useDispatch();

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
              key={id}
              title={title}
            >
              <S.StepOption
                className={cx(currentActive, completedSteps)}
              >
                {title}
              </S.StepOption>
            </S.StepTitle>
          );
        })}
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
