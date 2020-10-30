import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setIsReceiver } from '@Store/ducks/register';

import Steps from '@Components/Steps';

import Frames from './components/Frames';

import * as S from './styled';

const Form = ({
  stepOptions,
  stepTitle,
  stepFirst,
  formType,
  ...props
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsReceiver(formType === 'receptor'));

    return () => {
      sessionStorage.removeItem(formType);
    };
  }, []);

  return (
    <S.FormWrapper>
      {stepFirst && <Frames
        formType={formType}
        {...props}
      />}
      <Steps
        subTitle={stepTitle}
        stepOptions={stepOptions}
      />
      {!stepFirst && <Frames
        formType={formType}
        {...props}
      />}
    </S.FormWrapper>
  );
};

Form.propTypes = {
  stepTitle: PropTypes.string.isRequired,
  stepOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      stepNumber: PropTypes.number,
      title: PropTypes.string
    })
  ),
  stepFirst: PropTypes.bool,
  formType: PropTypes.string.isRequired
};

Form.defaultProps = {
  stepFirst: false
};

export default memo(Form);
