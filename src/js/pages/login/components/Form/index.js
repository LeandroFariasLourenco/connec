import React from 'react';
import {
  Link,
  useHistory
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setNavigation } from '@Store/ducks/navbar';

import LoginCookies from '@Utils/Login/index';

import Field from '@Components/Field';
import Button from '@Components/Button';

import Logo from '@Images/login/logo.png';
import User from '@Icons/login/user.svg';
import Security from '@Icons/login/security.svg';

import * as S from './styled';

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
    <S.Wrapper>
      <S.Form
        onSubmit={handleSubmit}
      >
        <img src={Logo} />
        <Field
          icon={User}
        >
          <S.Input
            maxLength={50}
            name='user-email'
            type='email'
            id='email'
            placeholder='Email...'
          />
        </Field>

        <Field
          icon={Security}
        >
          <S.Input
            maxLength={30}
            name='user-password'
            type='password'
            id='senha'
            placeholder='Senha...'
          />
        </Field>

        <Button
          text='Entrar'
          title='Login'
        />
        <Link
          to='/cadastro'
        >
          Esqueci minha senha
        </Link>
      </S.Form>
    </S.Wrapper>
  );
};

export default Form;
