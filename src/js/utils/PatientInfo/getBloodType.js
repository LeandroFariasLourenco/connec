import C from '@Constants/';

/**
 * @param {string} bloodType
 * @descrition returns the bloodtype in a way that's presentable to the user
 * @example getBloodType('O_NEG')
 */
const getBloodType = (bloodType) => {
  const enums = Object.values(C.BLOODTYPES);
  const bloodTypeIndex = enums.indexOf(bloodType);
  return Object.keys(C.BLOODTYPES)[bloodTypeIndex];
};

export default getBloodType;
