import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Header from '../Header';
import First from '../First';
import Second from '../Second';

import * as S from './styled';

const Frames = ({
  noBackground,
  formType,
  ...props
}) => {
  const { currentStep, formTitle } = useSelector((state) => state.register);

  return (
    <S.Wrapper
      noBackground
      {...props}
    >
      <S.FormField
        {...props}
      >
        <Header
          title={formTitle}
        />
        {currentStep === 0 && <First formType={formType}/>}
        {currentStep === 1 && <Second formType={formType}/>}
      </S.FormField>
      { !noBackground && (
        <>
          <S.FirstBackground />
          <S.SecondBackground />
        </>
      )}
    </S.Wrapper>
  );
};

Frames.propTypes = {
  noBackground: PropTypes.bool,
  formType: PropTypes.string.isRequired
};

Frames.defaultProps = {
  noBackground: false
};

export default Frames;
