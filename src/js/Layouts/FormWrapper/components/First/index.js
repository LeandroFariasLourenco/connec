import React from 'react';
import { useForm } from 'react-hook-form';
import cx from 'classnames';

import { handleInputMask, handlePostal } from '@Utils/Form';
// import { useSelector } from 'react-redux';

import FormInputs from '@Resources/Register/BasicInformations';

import * as S from './styled';

const First = () => {
  const {
    register: field,
    handleSubmit,
    errors
  } = useForm();

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev);
  };

  return (
    <S.FormData
      active
      autoComplete='new-password'
      onSubmit={handleSubmit(onSubmit)}
    >
      {FormInputs.map((input) => (
        <S.InputWrapper
          key={input.id}
          className={cx({
            'is-row': input.fill,
            'is-spaced': input.spaced,
            'has-error': errors[input.name]
          })}
        >
          <S.Label>
            {input.label}
          </S.Label>
          <S.Input
            ref={field({
              required: input.required,
              pattern: input.pattern
            })}
            onChange={({
              target: { value }
            }) => {
              if (input.label.includes('Cep')) {
                handlePostal(value, ['logradouro', 'uf', 'localidade']);
              }

              if (input.hasMask) {
                handleInputMask(value, input.pattern, input.replace, input.name);
              }
            }}
            name={input.name}
            type={input.type}
            autoComplete='new-password'
            readOnly={input.readOnly}
          />
        </S.InputWrapper>
      ))}

      <S.Submit
        title='Próximo'
        text='Próximo'
      />
    </S.FormData>
  );
};

export default First;
