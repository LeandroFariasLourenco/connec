import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNavigation } from '@Store/ducks/navbar';

import Sidebar from '@Components/Sidebar';

import Form from './components/Form';
import { useHistory } from 'react-router-dom';
import LoginCookies from '@Utils/Login';

import * as S from './styled';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cookie = LoginCookies.getCookie();

  useEffect(() => {
    if (!cookie) {
      dispatch(setNavigation('/'));
    } else {
      dispatch(setNavigation('/dashboard'));
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
