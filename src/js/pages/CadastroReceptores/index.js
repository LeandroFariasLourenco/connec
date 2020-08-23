import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Container from '@Layouts/Container';
import FormWrapper from '@Layouts/FormWrapper';

import Steps from '@Components/Steps';

import stepOptions from '@Resources/Steps/Receptores';

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
    <Container
      backgrounAlignRight
    >
      <S.BackButton
        reset
        title='Voltar'
        handler={handleGoBack}
      >
      </S.BackButton>

      <S.RegisterFormWrapper>
        <FormWrapper>
          <Frames/>
          <Steps
            subTitle='Cadastro de Receptor'
            stepOptions={stepOptions}
          />
        </FormWrapper>
      </S.RegisterFormWrapper>
    </Container>
  );
};

export default Cadastro;
