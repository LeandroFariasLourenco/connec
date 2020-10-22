import React from 'react';
import OrgansArray from '@Resources/Register/Organs';

/**
 * @param {string} organ
 * @description Returns the icon of the respective organ
 * @example getOrgan('Córneas') returns the svg of the organ
 */
const getOrgan = (organ) => {
  const organs = [];

  OrgansArray.forEach(({ label, icon }) => organs.push({
    title: label,
    svg: icon
  }));

  return <img src={organs.find(({ title }) => title === organ).svg} />;
};

export default getOrgan;
