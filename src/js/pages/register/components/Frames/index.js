import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import First from './../First';
// import Second from '';
// import Third from '';

import * as S from './styled';

const Forms = () => {
  const { currentStep } = useSelector(state => state.register);

  return (
    <S.Wrapper>
      <First />
      <S.FirstBackground />
      <S.SecondBackground />
    </S.Wrapper>
  );
};

export default Forms;
