import * as t from './types';

const INITIAL_STATE = {
  currentStep: 0,
  buttonTitle: 'Próximo',
  formTitle: 'Informações Básicas',
  isReceiver: false
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
      currentStep: 0,
      buttonTitle: 'Próximo',
      formTitle: 'Informações Básicas'
    };
  case t.SET_IS_RECEIVER:
    return {
      ...state,
      isReceiver: payload
    };
  default:
    return state;
  }
}
