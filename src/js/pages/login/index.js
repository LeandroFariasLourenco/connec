import React, { useEffect } from 'react';

import C from '@Constants/';

import Sidebar from '@Components/Sidebar';

import Form from './components/Form';
import { useHistory } from 'react-router-dom';

import * as S from './styled';

const Login = () => {
  const history = useHistory();
  const token = sessionStorage.getItem(C.ACCESSTOKEN);

  useEffect(() => {
    if (token) {
      history.push('/dashboard');
    }
  }, []);

  return (
    <>
      {!token && (
        <S.Wrapper>
          <Sidebar />
          <Form />
        </S.Wrapper>
      )}
    </>
  );
};

export default Login;
