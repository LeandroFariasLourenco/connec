import fromPairs from 'ramda/src/fromPairs';
import trim from 'ramda/src/trim';

const minimumIndex = 5000;

/**
 * Converte a string do arquivo scss para um array
 *
 * @param {string} str Uma string com valores
 */
const parseToArray = (str) => str.replace(/[']/gi, ',').split(/[,]/gi);

/**
 *
 * @param {string} labels Pega todas as strings do scss e, utilizando a função acima,
 *  gera todos os indíces de eixo z
 */
export default function getZindex (labels) {
  return fromPairs(
    parseToArray(labels).reverse().map(
      (label, index) => [trim(label), minimumIndex + index]
    )
  );
}
