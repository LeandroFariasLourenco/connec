import React from 'react';
import Navbar from '@Components/navbar/index';
import Backbutton from '@Svgs/cadastro/back.svg';
import Steps from './steps/index';
import Form from './form/index';

import * as S from './styled';

const Cadastro = () => {
  return (
    <S.Wrapper>
      <Navbar />
      <S.FormWrapper>
        <S.BackButtonWrapper>
          <img src={Backbutton} />
        </S.BackButtonWrapper>
        <Steps />
        <Form />
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default Cadastro;
