import React from 'react';
import Container from '@Components/Container';
import { setNavigation } from '@Store/ducks/navbar';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Backbutton from '@Svgs/cadastro/back.svg';

import FormWrapper from './components/FormWrapper';

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
      <S.FormWrapper>
        <S.BackButton
          reset
          title='Voltar'
          handler={handleGoBack}
        >
          <S.GoBack
            src={Backbutton}
          />
        </S.BackButton>

        <S.RegisterFormWrapper>
          <FormWrapper />
        </S.RegisterFormWrapper>

      </S.FormWrapper>
    </Container>
  );
};

export default Cadastro;
