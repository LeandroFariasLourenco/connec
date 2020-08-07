import * as t from './types';

const setupPreviousStep = (state) => ({
  type: t.PREVIOUS,
  payload: state
});

const validateStep = (current) => {
  console.log(current);
};

export const setPreviousStep = (state) => (dispatch) => {
  dispatch(setPreviousStep(state));
};

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
