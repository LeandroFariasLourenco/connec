import React from 'react';

import * as S from './styled';

import BloodTypes from '@Resources/Register/BloodType';

const Second = () => {
  return (
    <S.FormWrapper>
      {BloodTypes.map(({
        id,
        name,
        value,
        label
      }) => (
        <S.RadioWrapper
          key={id}
        >
          <S.Label>
            {label}
          </S.Label>
          <S.Radio
            name={name}
            value={value}
          />
        </S.RadioWrapper>
      ))}
    </S.FormWrapper>
  );
};

export default Second;
