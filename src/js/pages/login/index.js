import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import C from '@Constants';

import { setNavigation } from '@Store/ducks/navbar';

import Sidebar from '@Components/Sidebar';

import Form from './components/Form';

import * as S from './styled';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = sessionStorage.getItem(C.ACCESSTOKEN);

  useEffect(() => {
    setLoading(true);
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
          <CSSTransition
            in={loading}
            classNames='transition'
            timeout={300}
          >
            <Form />
          </CSSTransition>
        </S.Wrapper>
      )}
    </>
  );
};

export default Login;
