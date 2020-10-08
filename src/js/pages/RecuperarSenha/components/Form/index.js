import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import C from '@Constants';

import { postAuthentication } from '@Requests/Auth';

import ForgotFields from '@Resources/Forgot';

import Field from '@Components/Field';
import Button from '@Components/Button';

import Logo from '@Images/login/logo.png';

import * as S from './styled';

const Form = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register: formField,
    handleSubmit,
    errors
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      await postAuthentication({
        email: email,
        password: password
      });
    } catch (e) {
      setLoading(false);
      return setError(true);
    }

    history.push(C.PATHS.HOME);
  };

  const handleRedirect = () => {
    history.push(C.PATHS.HOME);
  };

  return (
    <S.Wrapper>
      <S.Form
        onSubmit={handleSubmit(onSubmit)}
      >
        <img src={Logo} />

        {error && (
          <S.ErrorMessage>
            <span>Ocorreu um erro... :( </span>
            <strong>A senha e email estão corretas ?</strong>
          </S.ErrorMessage>
        )}

        {ForgotFields.map((field) => (
          <Field
            key={field.id}
            icon={field.icon}
          >
            <S.Input
              maxLength={field.maxLength}
              name={field.name}
              type={field.type}
              id={field.identifier}
              className={cx({
                'has--error': errors[field.name],
                'is--loading': loading
              })}
              ref={formField({
                required: field.required,
                pattern: field.pattern
              })}
              placeholder={field.placeholder}
            />
          </Field>
        ))}

        <Button
          text='Entrar'
          title='Login'
        />
        <S.Btn
          reset
          type='button'
          onClick={() => handleRedirect()}
          title='esqueci'
        >
          Voltar ao login
        </S.Btn>
      </S.Form>
    </S.Wrapper>
  );
};

export default Form;
