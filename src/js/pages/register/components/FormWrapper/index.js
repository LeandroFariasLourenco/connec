import React from 'react';

import Steps from './../Steps';
import Frames from './../Frames';

import * as S from './styled';

const Form = () => {
  return (
    <S.FormWrapper>
      <Steps />
      <Frames />
    </S.FormWrapper>
  );
};

export default Form;
