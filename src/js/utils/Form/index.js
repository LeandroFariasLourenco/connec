import axios from '@Requests/Axios/crossDomain';

/**
 * Sets a custom mask and auto injects on the input field
 *
 * @param {string} value // The input value for validation
 *
 * @param {regex} regex // Regex that will replace the value
 *
 * @param {string} replace // A string which contains the mask
 *
 * @param {string} name // Input name for value replacement
 */
export const handleInputMask = (value, regex, replace, name) => {
  value = value.replace(/\D/g, '');
  value = value.replace(regex, replace);
  document.querySelector(`input[name=${name}]`).value = value;
};

/**
 * Sets up a request for residential auto complete
 *
 * @param {string} cep // Input postal code for request
 *
 * @param {array} fields // Array of names that must be the same as the request response
 * @example
 *  handlePostal(09920220, [
 *    cep,
 *    logradouro,
 *    complemento,
 *    bairro,
 *    localidade,
 *    uf
 *  ])
 */
export const handlePostal = async (cep, fields) => {
  if (cep.length < 8) return;
  const { data } = await axios.get(`viacep.com.br/ws/${cep}/json/`);
  fields.map((field) => {
    document.querySelector(`input[name=${field}]`).value = data[field];
  });
};
