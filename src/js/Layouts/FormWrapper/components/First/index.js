import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { setActiveStep } from '@Store/ducks/register';

import { setStorage, getStorage } from '@Utils/General';
import { handleInputMask, handlePostal, fillFormData } from '@Utils/Form';
import FormInputs from '@Resources/Register/BasicInformations';

import * as S from './styled';

const First = ({ formType }) => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state) => state.register);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedFormData = getStorage(formType, false);
    setIsMounted(true);

    if (!storedFormData) return;

    const inputNames = FormInputs.map(({ name }) => name);
    fillFormData('BasicInformation', 'first', inputNames, storedFormData);
  }, []);

  const {
    register: field,
    handleSubmit,
    errors
  } = useForm();

  const onSubmit = (data) => {
    const { celular, telefone } = data;
    if (!celular && !telefone) return;

    setStorage(formType, { ...data });
    console.log(data);
    // dispatch(setActiveStep(currentStep + 1));
  };

  return (
    <CSSTransition
      in={isMounted}
      timeout={600}
      classNames='transition'
    >
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
    </CSSTransition>
  );
};

First.propTypes = {
  formType: PropTypes.string.isRequired
};

export default First;
