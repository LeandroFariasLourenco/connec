import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Container from '@Layouts/Container';
import FormWrapper from '@Layouts/FormWrapper';

import stepOptions from '@Resources/Steps/Receptores';

import { setNavigation } from '@Store/ducks/navbar';

import * as S from './styled';

const Cadastro = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoBack = () => {
    dispatch(setNavigation('/doadores'));
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
