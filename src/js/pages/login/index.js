import React from 'react';

import * as s from './style';

import Sidebar from './sidebar/index';
import Form from './form/index';

const Login = () => {
  return (
    <s.Wrapper>
      <Sidebar />
      <Form />
    </s.Wrapper>
  );
};

export default Login;
