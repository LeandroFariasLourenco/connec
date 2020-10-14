import React, { memo } from 'react';

import C from '@Constants';

import SupportSvg from '@Icons/login/support.svg';

import * as S from './styled';

const Support = () => {
  return (
    <S.SupportWrapper>
      <S.SupportLogo src={SupportSvg} />
      <S.Phone>
        {C.SACNUMBER}
      </S.Phone>
    </S.SupportWrapper>
  );
};

export default memo(Support);
