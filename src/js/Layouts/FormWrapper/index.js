import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Frames from './components/Frames';

import Steps from '@Components/Steps';

import * as S from './styled';

const Form = ({
  stepOptions,
  stepTitle,
  stepFirst,
  ...props
}) => (
  <S.FormWrapper>
    {stepFirst && <Frames {...props} />}
    <Steps
      subTitle={stepTitle}
      stepOptions={stepOptions}
    />
    {!stepFirst && <Frames {...props} />}
  </S.FormWrapper>
);

Form.propTypes = {
  stepTitle: PropTypes.string.isRequired,
  stepOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      stepNumber: PropTypes.number,
      title: PropTypes.string
    })
  ),
  stepFirst: PropTypes.bool
};

Form.defaultProps = {
  stepFirst: false
};

export default memo(Form);
