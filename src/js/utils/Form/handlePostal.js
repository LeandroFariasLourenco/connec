import axios from '@Requests/Axios/crossDomain';

/**
 * Sets up a request for residential auto complete
 *
 * @param {string} cep // Input postal code for request
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
const handlePostal = async (cep, fields) => {
  if (cep.length < 8) return;
  try {
    const { data } = await axios.get(`viacep.com.br/ws/${cep}/json/`);
    const address = { ...data };
    address.cidade = data.localidade;
    console.log(address);

    fields.forEach((field) => {
      console.log(field);
      const inputField = document.querySelector(`input[name=${field}]`);
      inputField.classList.add('is--loading');
      const loadingInputs = Array.from(document.querySelectorAll('input.is--loading'));

      inputField.value = address[field];
      loadingInputs.forEach((input) => input.classList.remove('is--loading'));
    });
  } catch (e) {
    console.error('Oops... alguma coisa deu errada na api de consultar cep');
  }
};

export default handlePostal;
