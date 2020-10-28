import React from 'react';

import Container from '@Layouts/Container';
import FormWrapper from '@Layouts/FormWrapper';

import stepOptions from '@Resources/Steps';

import * as S from './styled';

const Cadastro = () => {
  return (
    <Container
      backgrounAlignRight
    >
      <S.RegisterFormWrapper>
        <FormWrapper
          stepTitle='Cadastro de Receptor'
          stepOptions={stepOptions}
          formType='receptor'
          noBackground
          stepFirst
        />
      </S.RegisterFormWrapper>
    </Container>
  );
};

export default Cadastro;
