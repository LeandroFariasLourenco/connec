import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNavigation } from '@Store/ducks/navbar';

import Sidebar from '@Components/Sidebar';

import Form from './components/Form';

import * as S from './styled';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavigation('/'));
  }, []);

  return (
    <S.Wrapper>
      <Sidebar />
      <Form />
    </S.Wrapper>
  );
};

export default Login;
