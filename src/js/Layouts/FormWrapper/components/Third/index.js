import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import cx from 'classnames';

import { setStorage, getStorage } from '@Utils/General';
import { fillFormData } from '@Utils/Form';

import { setActiveStep } from '@Store/ducks/register';
import OrgansList from '@Resources/Register/Organs';

import FormButtons from '@Components/FormButtons';

import './style.scss';
import * as S from './styled';

const Second = ({ formType }) => {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const { currentStep } = useSelector((state) => state.register);
  const { handleSubmit, register: field, errors } = useForm();

  useEffect(() => {
    setIsMounted(true);

    const patient = getStorage(formType, false) || {};
    if (!patient.orgao) return;

    fillFormData({
      formStep: 'third',
      storedFormData: patient,
      formFieldNames: ['score']
    });
  }, []);

  const onSubmit = ({ orgao, score }) => {
    const storedData = getStorage(formType, false);
    storedData.orgao = orgao;
    storedData.score = score;
    setStorage(formType, { ...storedData });
    dispatch(setActiveStep(currentStep + 1));
  };

  console.log(errors);

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
          {OrgansList.map(({
            id,
            name,
            value,
            label,
            icon
          }) => (
            <S.RadioWrapper
              key={id}
            >
              <S.Radio
                type='radio'
                name={name}
                value={value}
                id={value}
                ref={field({ required: true })}
              />
              <S.Label
                htmlFor={value}
              >
                <S.RadioIcon src={icon} alt={value} title={value} />
                {label}
              </S.Label>
            </S.RadioWrapper>
          ))}
        </S.OptionsWrapper>

        <S.ScoreWrapper>
          <S.Score
            className={cx({
              'has--error': errors.score
            })}
            placeholder={`Digite o score do ${formType} (1 - 100)`}
            type='number'
            id='score'
            name='score'
            ref={field({
              required: true,
              pattern: /[0-9]/,
              max: 100,
              min: 1
            })}
          />
        </S.ScoreWrapper>
        <FormButtons callback={() => dispatch(setActiveStep(currentStep - 1))} />
      </S.FormWrapper>
    </CSSTransition>
  );
};

Second.propTypes = {
  formType: PropTypes.string.isRequired
};

export default Second;
