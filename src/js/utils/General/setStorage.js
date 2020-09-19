/**
 * @param {string} key // the identifier for that particular browser storage
 * @param {object} json // the object that'll be used for storing
 * @param {boolean} isLocal // argument that will indicate if it's to search in local or session
 * @example 'setStorage(test, {a: 1, b: 2}), false' // will set a session storage item
 */
const setFormStorage = (key, json, isLocal = true) => {
  const newObj = {
    type: key,
    ...json
  };
  const parsedJson = JSON.stringify(newObj);

  isLocal
    ? sessionStorage.setItem(key, parsedJson)
    : localStorage.setItem(key, parsedJson);
};

export default setFormStorage;
