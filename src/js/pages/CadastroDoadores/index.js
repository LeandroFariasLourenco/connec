import React from 'react';

import Container from '@Layouts/Container';
import FormWrapper from '@Layouts/FormWrapper';

import stepOptions from '@Resources/Steps/Doadores';

import * as S from './styled';

const Cadastro = () => {
  return (
    <Container>
      <S.RegisterFormWrapper>
        <FormWrapper
          stepTitle='Cadastro de Doador'
          stepOptions={stepOptions}
          formType='doador'
          isAbsolute
        />
      </S.RegisterFormWrapper>
    </Container>
  );
};

export default Cadastro;
