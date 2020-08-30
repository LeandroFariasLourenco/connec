import React from 'react';
import { useForm } from 'react-hook-form';
import cx from 'classnames';

import FormInputs from '@Resources/Register/BasicInformations';

import * as S from './styled';

const First = () => {
  const {
    register: field,
    handleSubmit,
    errors
  } = useForm();

  return (
    <S.FormData
      active
    >
      {console.log(FormInputs)}
      {FormInputs.map(({
        id,
        fill,
        spaced,
        label,
        readOnly,
        required,
        pattern
      }) => (
        <S.InputWrapper
          key={id}
          className={cx({
            'is-row': fill,
            'is-spaced': spaced
          })}
        >
          <S.Label>
            {label}
          </S.Label>
          <S.Input
            ref={field({
              required: required,
              pattern: pattern
            })}
            readOnly={readOnly}
          />
        </S.InputWrapper>
      ))}
    </S.FormData>
  );
};

export default First;
