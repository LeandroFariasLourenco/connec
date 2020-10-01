import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import C from '@Constants';

import { setNavigation } from '@Store/ducks/navbar';

import Sidebar from '@Components/Sidebar';

import Form from './components/Form';

import * as S from './styled';

const RecuperarSenha = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavigation(C.PATHS.ESQUECER_SENHA));
  }, []);

  return (
    <S.Wrapper>
      <Sidebar />
      <Form />
    </S.Wrapper>
  );
};

export default RecuperarSenha;
