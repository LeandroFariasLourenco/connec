import React from 'react';
import { useHistory } from 'react-router-dom';

import Container from '@Layouts/Container';
import FormWrapper from '@Layouts/FormWrapper';

import stepOptions from '@Resources/Steps/Receptores';

import * as S from './styled';

const Cadastro = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/doadores');
  };

  return (
    <Container
      backgrounAlignRight
    >
      <S.BackButton
        reset
        title='Voltar'
        onClick={handleGoBack}
      >
      </S.BackButton>

      <S.RegisterFormWrapper>
        <FormWrapper
          stepTitle='Cadastro de Receptor'
          stepOptions={stepOptions}
          noBackground
          stepFirst
        />
      </S.RegisterFormWrapper>
    </Container>
  );
};

export default Cadastro;
