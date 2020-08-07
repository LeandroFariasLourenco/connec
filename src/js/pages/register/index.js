import React from 'react';

import Container from '@Components/Container';
import Backbutton from '@Svgs/cadastro/back.svg';
import Steps from './steps/index';
import Form from './form/index';

import * as S from './styled';

const Cadastro = () => {
  return (
    <Container>
      <S.FormWrapper>
        <S.BackButtonWrapper>
          <img src={Backbutton} />
        </S.BackButtonWrapper>
        <Steps />
        <Form />
      </S.FormWrapper>
    </Container>
  );
};

export default Cadastro;
