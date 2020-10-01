import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import C from '@Constants';

import { setNavigation } from '@Store/ducks/navbar';

import Sidebar from '@Components/Sidebar';

import Form from './components/Form';

import * as S from './styled';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = sessionStorage.getItem(C.ACCESSTOKEN);

  useEffect(() => {
    dispatch(setNavigation(C.PATHS.HOME));

    if (token) {
      history.push(C.PATHS.DASHBOARD);
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
