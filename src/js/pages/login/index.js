import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Sidebar from '@Components/Sidebar';

import Form from './components/Form';
import { useHistory } from 'react-router-dom';
import LoginCookies from '@Utils/Login';

import * as S from './styled';

const Login = () => {
  const history = useHistory();
  const cookie = LoginCookies.getCookie();

  useEffect(() => {
    if (cookie) {
      history.push('/dashboard');
    }
  }, []);

  return (
    <>
      {!cookie && (
        <S.Wrapper>
          <Sidebar />
          <Form />
        </S.Wrapper>
      )}
    </>
  );
};

export default Login;
