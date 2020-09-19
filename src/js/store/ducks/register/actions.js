import * as t from './types';

export const setActiveStep = (stepNumber) => {
  const state = {
    currentStep: stepNumber,
    buttonTitle: stepNumber < 2 ? 'Próximo' : 'Finalizar',
    formTitle: (stepNumber === 0 && 'Informações Básicas') ||
    (stepNumber === 1 && 'Tipo Sanguíneo') ||
    (stepNumber === 2 && 'Cadastro de órgão')
  };

  return {
    type: t.SETACTIVESTEP,
    payload: state
  };
};

export const resetStep = () => ({
  type: t.RESETSTEP,
  payload: null
});
