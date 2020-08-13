import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Container from '@Components/Container';
import Steps from '@Components/Steps';
import FormWrapper from '@Components/FormWrapper';

import stepOptions from '@Utils/Steps/Doadores';

import { setNavigation } from '@Store/ducks/navbar';

import Frames from './components/Frames';

import * as S from './styled';

const Cadastro = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoBack = () => {
    dispatch(setNavigation('/doadores'));
    history.push('/doadores');
  };

  return (
    <Container>
      <S.BackButton
        reset
        title='Voltar'
        handler={handleGoBack}
      >
      </S.BackButton>

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
