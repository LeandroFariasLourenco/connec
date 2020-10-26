import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import cx from 'classnames';

import { setStorage, getStorage } from '@Utils/General';
import { fillFormData } from '@Utils/Form';

import { setActiveStep } from '@Store/ducks/register';
import organsList from '@Resources/Register/Organs';

import FormButtons from '@Components/FormButtons';

import * as S from './styled';

const Second = ({ formType }) => {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const { currentStep, isReceiver } = useSelector((state) => state.register);
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

  const onSubmit = ({ orgao, score = null }) => {
    const storedData = getStorage(formType, false);
    const receiverOrgans = [];

    if (isReceiver) {
      storedData.score = parseInt(score);
    }

    if (!Array.isArray(orgao)) orgao = [orgao];

    orgao.forEach((chosenOrgan) => {
      receiverOrgans.push({
        nome: chosenOrgan.split('|')[0],
        numeroIsquemia: parseInt(chosenOrgan.split('|')[1])
      });
    });

    storedData.orgaos = receiverOrgans;

    setStorage(formType, { ...storedData });
    dispatch(setActiveStep(currentStep + 1));
  };

  return (
    <CSSTransition
      in={isMounted}
      timeout={600}
      classNames='transition'
      mountOnEnter
    >
      <S.FormWrapper
        active
        onSubmit={handleSubmit(onSubmit)}
      >
        <S.OptionsWrapper>
          {organsList.map(({
            id,
            name,
            value,
            label,
            icon
          }) => (
            <S.InputWrapper
              key={id}
            >
              <S.Input
                type={isReceiver ? 'checkbox' : 'radio'}
                name={name}
                value={value}
                id={value}
                ref={field({ required: true })}
              />
              <S.Label
                htmlFor={value}
              >
                <S.InputIcon src={icon} alt={value} title={value} />
                {label}
              </S.Label>
            </S.InputWrapper>
          ))}
        </S.OptionsWrapper>

        {isReceiver && (
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
        )}
        <FormButtons callback={() => dispatch(setActiveStep(currentStep - 1))} />
      </S.FormWrapper>
    </CSSTransition>
  );
};

Second.propTypes = {
  formType: PropTypes.string.isRequired
};

export default Second;
