import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import _ from 'lodash';
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
  const formRef = useRef();

  useEffect(() => {
    const storedFormData = getStorage(formType, false);
    setIsMounted(true);

    if (!storedFormData) return;

    const inputNames = FormInputs.map(({ name }) => name);
    fillFormData({
      formStep: 'first',
      formFieldNames: inputNames,
      storedFormData: storedFormData
    });
  }, []);

  const {
    register: field,
    handleSubmit,
    errors
  } = useForm();

  const onSubmit = (data) => {
    const { celular, telefone } = data;
    if (!celular && !telefone) {
      return;
    };

    const storedObject = getStorage(formType, false);

    setStorage(formType, _.isEqual(storedObject, { ...data }) ? storedObject : { ...data });
    dispatch(setActiveStep(currentStep + 1));
  };

  const handleClearForm = (ev) => {
    ev.preventDefault();
    formRef.current.reset();
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
        ref={formRef}
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
                  handlePostal(value, ['logradouro', 'uf', 'cidade']);
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

        <S.ButtonWrapper>
          <S.Btn
            title='Limpar'
            text='Limpar'
            type='button'
            onClick={(ev) => handleClearForm(ev)}
          />

          <S.Btn
            title='Próximo'
            text='Próximo'
            type='submit'
          />
        </S.ButtonWrapper>

      </S.FormData>
    </CSSTransition>
  );
};

First.propTypes = {
  formType: PropTypes.string.isRequired
};

export default First;
