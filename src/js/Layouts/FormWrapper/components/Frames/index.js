import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Header from '../Header';
import First from '../First';
import Second from '../Second';

import * as S from './styled';

const Frames = ({
  noBackground,
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
        {currentStep === 0 && <First />}
        {currentStep === 1 && <Second />}
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
  noBackground: PropTypes.bool
};

Frames.defaultProps = {
  noBackground: false
};

export default Frames;
