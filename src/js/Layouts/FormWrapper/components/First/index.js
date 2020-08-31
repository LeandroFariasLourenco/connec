import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { setActiveStep } from '@Store/ducks/register';

import { handleInputMask, handlePostal } from '@Utils/Form';
import FormInputs from '@Resources/Register/BasicInformations';

import * as S from './styled';

const First = () => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state) => state.register);

  const {
    register: field,
    handleSubmit,
    errors
  } = useForm();

  const onSubmit = (data) => {
    const { celular, telefone } = data;
    if (!celular && !telefone) return;

    dispatch(setActiveStep(currentStep + 1));
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
            maxLength={input.maxLength}
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
