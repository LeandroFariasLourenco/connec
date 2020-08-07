import * as t from './types';

const setupPreviousStep = (state) => ({
  type: t.PREVIOUS,
  payload: state
});

const getActualStep = () => ({
  type: t.GETCURRENTSTEP
});

export const setPreviousStep = (state) => (dispatch) => {
  const step = {
    currentStep: getActualStep() - 1,
    buttonTitle: 'Próximo'
  };

  dispatch(setPreviousStep(step));
};
