import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import './style.scss';

import * as S from './styled';

import { setActiveStep } from '@Store/ducks/register';
import BloodTypes from '@Resources/Register/BloodType';

const Second = () => {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const { currentStep } = useSelector((state) => state.register);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <CSSTransition
      in={isMounted}
      timeout={600}
      classNames='transition'
    >
      <S.FormWrapper
        active
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
              />
              <S.Label>
                {label}
              </S.Label>
            </S.RadioWrapper>
          ))}
        </S.OptionsWrapper>

        <S.ButtonsWrapper>
          <S.GoBack
            title='Anterior'
            text='Voltar'
            onClick={() => dispatch(setActiveStep(currentStep - 1))}
          />
          <S.Continue
            title='Continuar'
            text='Próximo'
            onClick={() => dispatch(setActiveStep(currentStep + 1))}
          />
        </S.ButtonsWrapper>
      </S.FormWrapper>
    </CSSTransition>
  );
};

Second.propTypes = {
  formType: PropTypes.string.isRequired
};

export default Second;
