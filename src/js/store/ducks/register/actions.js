import * as t from './types';

export const setActiveStep = (stepNumber) => {
  const state = {
    currentStep: stepNumber,
    formTitle: (stepNumber === 0 && 'Informações Básicas') ||
    (stepNumber === 1 && 'Tipo Sanguíneo') ||
    (stepNumber === 2 && 'Informações Médicas') ||
    (stepNumber === 3 && 'Detalhes Finais')
  };

  return {
    type: t.SETACTIVESTEP,
    payload: state
  };
};

export const resetStep = () => ({
  type: t.RESETSTEP
});

export const setIsReceiver = (state) => ({
  type: t.SET_IS_RECEIVER,
  payload: state
});
