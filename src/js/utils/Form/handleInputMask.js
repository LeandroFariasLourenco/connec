/**
 * Sets a custom mask and auto injects on the input field
 *
 * @param {string} value // The input value for validation
 * @param {regex} regex // Regex that will replace the value
 * @param {string} replace // A string which contains the mask
 * @param {string} name // Input name for value replacement
 */
const handleInputMask = (value, regex, replace, name) => {
  value = value.replace(/\D/g, '');
  value = value.replace(regex, replace);
  document.querySelector(`input[name=${name}]`).value = value;
};

export default handleInputMask;
