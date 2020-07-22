import Button from '@Components/button/index';
import React from 'react';
import * as s from './style';

const Steps = () => {
  return (
    <s.StepWrapper>
      <div className='steps'>
        <h2>Cadastro do doador</h2>
        <span>Informações básicas</span>
        <span>Tipo Sanguíneo</span>
        <span className='active'>Cadastro de órgãos</span>
        <Button
          text='Finalizar'
        />
      </div>
    </s.StepWrapper>
  );
};

export default Steps;
