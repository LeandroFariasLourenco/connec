import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import C from '@Constants';

import { setNavigation } from '@Store/ducks/navbar';

import Sidebar from '@Components/Sidebar';

import Form from './components/Form';

import * as S from './styled';

const RecuperarSenha = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(setNavigation(C.PATHS.ESQUECER_SENHA));
    setLoading(true);
  }, []);

  return (
    <S.Wrapper>
      <Sidebar />
      <CSSTransition
        in={loading}
        classNames='transition'
        timeout={300}
        mountOnEnter
      >
        <Form />
      </CSSTransition>
    </S.Wrapper>
  );
};

export default RecuperarSenha;
