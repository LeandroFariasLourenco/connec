/**
 * @param {object} object
 * @example isEmpty({}) Will return true
 */
export const isEmpty = (object) => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
};
