import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { setStorage, getStorage } from '@Utils/General';
import { fillFormData } from '@Utils/Form';

import { setActiveStep } from '@Store/ducks/register';
import BloodTypes from '@Resources/Register/BloodType';

import FormButtons from '@Components/FormButtons';

import './style.scss';
import * as S from './styled';

const Second = ({ formType }) => {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const { currentStep } = useSelector((state) => state.register);
  const { handleSubmit, register: field } = useForm();

  useEffect(() => {
    setIsMounted(true);

    const { bloodType } = getStorage(formType, false) || {};
    if (!bloodType) return;

    fillFormData({
      formStep: 'second',
      storedFormData: bloodType
    });
  }, []);

  const onSubmit = ({ tipoSangue }) => {
    const storedData = getStorage(formType, false);
    storedData.bloodType = tipoSangue;
    setStorage(formType, { ...storedData });
    dispatch(setActiveStep(currentStep + 1));
  };

  return (
    <CSSTransition
      in={isMounted}
      timeout={600}
      classNames='transition'
    >
      <S.FormWrapper
        active
        onSubmit={handleSubmit(onSubmit)}
      >
        <S.OptionsWrapper>
          {BloodTypes.map(({
            id,
            name,
            value,
            label
          }) => (
            <S.RadioWrapper
              key={id}
            >
              <S.Radio
                type='radio'
                name={name}
                value={value}
                ref={field({
                  required: true
                })}
              />
              <S.Label>
                {label}
              </S.Label>
            </S.RadioWrapper>
          ))}
        </S.OptionsWrapper>
        <FormButtons callback={() => dispatch(setActiveStep(currentStep - 1))} />
      </S.FormWrapper>
    </CSSTransition>
  );
};

Second.propTypes = {
  formType: PropTypes.string.isRequired
};

export default Second;
