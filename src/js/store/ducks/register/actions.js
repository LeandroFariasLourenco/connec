import * as t from './types';

export const setActiveStep = (stepNumber) => {
  const state = {
    currentStep: stepNumber,
    buttonTitle: stepNumber < 2 ? 'Próximo' : 'Finalizar'
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
