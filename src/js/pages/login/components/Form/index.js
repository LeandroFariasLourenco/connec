import React from 'react';
import * as s from './styled';
import {
  Link,
  useHistory
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setNavigation } from '@Store/ducks/navbar';

import LoginCookies from '@Utils/Login/index';

import Input from '@Components/Input';
import Button from '@Components/Button';

import Logo from '@Images/login/logo.png';
import User from '@Svgs/login/user.svg';
import Security from '@Svgs/login/security.svg';

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const homePage = '/dashboard';

    LoginCookies.setupCookie();
    dispatch(setNavigation(homePage));
    history.push(homePage);
  };

  return (
    <s.Wrapper>
      <s.Form
        onSubmit={handleSubmit}
      >
        <img src={Logo} />
        <Input
          icon={User}
          maxLength={50}
          name='user-email'
          type='email'
          id='email'
          placeholder='Email...'
        />
        <Input
          icon={Security}
          maxLength={30}
          name='user-password'
          type='password'
          id='senha'
          placeholder='Senha...'
        />

        <Button
          text='Entrar'
          title='Login'
        />
        <Link
          to='/cadastro'
        >
          Esqueci minha senha
        </Link>
      </s.Form>
    </s.Wrapper>
  );
};

export default Form;