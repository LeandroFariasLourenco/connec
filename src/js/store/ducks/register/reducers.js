import * as t from './types';

const INITIAL_STATE = {
  currentStep: 0,
  buttonTitle: 'Próximo',
  formTitle: 'Informações Básicas'
};

export default function reducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.SETACTIVESTEP:
    return {
      ...state,
      currentStep: payload.currentStep,
      buttonTitle: payload.buttonTitle,
      formTitle: payload.formTitle
    };
  case t.RESETSTEP:
    return {
      ...state,
      currentStep: INITIAL_STATE.currentStep,
      buttonTitle: INITIAL_STATE.buttonTitle
    };
  default:
    return state;
  }
}
