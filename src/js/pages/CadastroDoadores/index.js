import React from 'react';

import Container from '@Layouts/Container';
import FormWrapper from '@Layouts/FormWrapper';

import Steps from '@Components/Steps';

import stepOptions from '@Resources/Steps/Doadores';

import Frames from './components/Frames';

import * as S from './styled';

const Cadastro = () => {
  return (
    <Container>

      <S.RegisterFormWrapper>
        <FormWrapper>
          <Steps
            subTitle='Cadastro do Doador'
            stepOptions={stepOptions}
          />
          <Frames />
        </FormWrapper>
      </S.RegisterFormWrapper>
    </Container>
  );
};

export default Cadastro;
