import React, { useEffect } from 'react';

import Sidebar from '@Components/Sidebar';

import Form from './components/Form';
import { useHistory } from 'react-router-dom';

import * as S from './styled';

const Login = () => {
  const history = useHistory();
  const token = sessionStorage.getItem('accessToken');

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
