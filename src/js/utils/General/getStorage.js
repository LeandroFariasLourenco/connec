/**
 * @param {string} key // the identifier for that particular browser storage
 * @param {boolean} isLocal // argument that will indicate if it's to search in local or session
 * @example 'getStorage(test, false)' // Will return a session storage item that has a key of test
 * @return {any primitive type or object}
 */

const getStorage = (key, isLocal = true) => {
  let aux;

  isLocal
    ? aux = localStorage.getItem(key)
    : aux = sessionStorage.getItem(key);

  return JSON.parse(aux);
};

export default getStorage;
