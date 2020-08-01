import React from 'react';
import * as s from './styled';
import {
  Link
} from 'react-router-dom';
import Logo from '@Images/login/logo.png';

import Input from '@Components/input/index';
import User from '@Svgs/login/user.svg';
import Security from '@Svgs/login/security.svg';

import Button from '@Components/button/index';
const Form = () => {
  return (
    <s.Wrapper>
      <form>
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

        <Button text='Entrar' />
        <Link
          to='/cadastro'
        >
          Esqueci minha senha
        </Link>
      </form>
    </s.Wrapper>
  );
};

export default Form;
