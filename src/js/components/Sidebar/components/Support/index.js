import React from 'react';

import SupportSvg from '@Svgs/login/support.svg';

import * as S from './styled';

const Support = () => {
  return (
    <S.SupportWrapper>
      <S.SupportLogo src={SupportSvg} />
      <S.Phone>
        0800 <span>5652</span> 2452
      </S.Phone>
    </S.SupportWrapper>
  );
};

export default Support;