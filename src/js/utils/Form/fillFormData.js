/**
 * @param {string} formType // a string for the form title
 * @param {string} formStep // the title form in step
 * @param {array} formFieldNames // the formFields to be filled
 * @param {object} storedFormData // object that contains the information to fill out filling out the fields
 * @example 'fillFormData(receptor, first, ['name, rg'], {name: 'Leandro', rg: 'xx.xxx.xxx-x'})'
 */
const fillFormData = (formType, formStep, formFieldNames, storedFormData) => {
  const getForm = {
    first: () => {
      formFieldNames.forEach(field => {
        const $input = document.querySelector(`input[name=${field}]`);
        const inputStoredValue = storedFormData[`${field}`];

        $input.value = inputStoredValue;
      });
    },
    second: () => {},
    third: () => {}
  };

  return getForm[`${formStep}`]();
};

export default fillFormData;
