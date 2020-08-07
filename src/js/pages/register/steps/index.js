import React, { useState } from 'react';
import cx from 'classnames';

import Button from '@Components/button/index';

import * as S from './styled';

const Steps = () => {
  const [currentStep] = useState(0);

  return (
    <S.StepWrapper>
      <S.Step>
        <S.StepTitle className={cx('yolo', { currentStep })}>Cadastro do doador</S.StepTitle>
        <S.StepOption>Informações básicas</S.StepOption>
        <S.StepOption>Tipo Sanguíneo</S.StepOption>
        <S.StepOption>Cadastro de órgãos</S.StepOption>
        <Button
          text='Finalizar'
        />
      </S.Step>
    </S.StepWrapper>
  );
};

export default Steps;
