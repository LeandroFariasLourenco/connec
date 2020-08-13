import React from 'react';

import First from './../First';
// import Second from './../Second';
// import Third from '';

import * as S from './styled';

const Forms = () => {
  return (
    <S.Wrapper>
      <First />
      {/* <Second /> */}
      <S.FirstBackground />
      <S.SecondBackground />
    </S.Wrapper>
  );
};

export default Forms;
