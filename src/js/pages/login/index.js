import React from 'react';

import * as S from './styled';

import Sidebar from './sidebar/index';
import Form from './form/index';

const Login = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <Form />
    </S.Wrapper>
  );
};

export default Login;
