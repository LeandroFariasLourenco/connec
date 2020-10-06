/**
 * @param {string} formType // a string for the form title
 * @param {string} formStep // the title form in step
 * @param {array} formFieldNames // the formFields to be filled
 * @param {object} storedFormData // object that contains the information to fill out filling out the fields
 * @example 'fillFormData(receptor, first, ['name, rg'], {name: 'Leandro', rg: 'xx.xxx.xxx-x'})'
 */
const fillFormData = ({ formStep, formFieldNames, storedFormData }) => {
  const getForm = {
    first: () => {
      setupInput(formFieldNames, storedFormData);
    },
    second: () => setupRadio(storedFormData),
    third: () => {
      setupRadio(storedFormData.orgao);
      setupInput(formFieldNames, storedFormData);
    }
  };

  return getForm[`${formStep}`]();
};

const setupInput = (formFieldNames, storedFormData) => {
  formFieldNames.forEach((field) => {
    const $input = document.querySelector(`input[name="${field}"]`);
    const inputStoredValue = storedFormData[`${field}`];

    $input.value = inputStoredValue;
  });
};

const setupRadio = (storedFormData) => {
  const radio = [...document.querySelectorAll('input[type="radio"]')].find((input) => (
    input.value === storedFormData
  ));
  radio.checked = true;
};

export default fillFormData;
