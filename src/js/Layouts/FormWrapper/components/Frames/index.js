import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import First from '../First';

import * as S from './styled';

const Frames = ({
  noBackground,
  ...props
}) => {
  return (
    <S.Wrapper
      noBackground
      {...props}
    >
      <S.FormField
        {...props}
      >
        <Header
          title='Informações Básicas'
        />
        <First />
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
