import React from 'react';
import * as s from './style';
import {
  Link
} from 'react-router-dom';
import Button from '@Components/button/index';

const Form = () => {
  return (
    <s.Wrapper>
      <form>
        <img />
        <input placeholder='Email...'/>
        <input placeholder='Senha...'/>
        <Button text='Entrar'/>
        <Link>Esqueci minha senha</Link>
      </form>
    </s.Wrapper>
  );
};

export default Form;
