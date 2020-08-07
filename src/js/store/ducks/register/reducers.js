import * as t from './types';

const INITIAL_STATE = {
  currentStep: 0,
  buttonTitle: 'Próximo'
};

export default function reducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case t.PREVIOUS:
      return {
        ...state,
        currentStep: payload.currentStep - 1,
        buttonTitle: payload
      };
    case t.NEXT:
      return {
        ...state,
        currentStep: payload + 1,
        buttonTitle: payload
      };
    case t.FINISH:
      return { ...state };
    case t.GETCURRENTSTEP:
      return state;
    default:
      return state;
  }
}
