/**
 *
 * @param {string} word // the string that will be pluralized
 * @param {integer} condition // the number that will be used for conditional validation
 * @example 'doador, 2' // will return doadores or doador depending on the condition
 * @returns {string}
 */
const pluralize = (word, condition) => {
  let aux;
  if (condition > 1) aux = `${word}es`;
  else aux = word;

  return aux;
};

export default pluralize;
