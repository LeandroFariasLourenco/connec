import React from 'react';
import * as s from './style';
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
          _icon={User}
          _maxLength={50}
          _name='user-email'
          _type='email'
          _id='email'
          _placeholder='Email...'
        />
        <Input
          _icon={Security}
          _maxLength={30}
          _name='user-password'
          _type='password'
          _id='senha'
          _placeholder='Senha...'
        />

        <Button text='Entrar' />
        <Link
          to='/cadastro'
        >Esqueci minha senha</Link>
      </form>
    </s.Wrapper>
  );
};

export default Form;
