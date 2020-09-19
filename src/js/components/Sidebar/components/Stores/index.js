import React from 'react';

import Appstore from '@Images/login/appstore.png';
import Googlestore from '@Images/login/googleplaystore.png';

import * as S from './styled';

const Store = () => {
  return (
    <S.StoreWrapper>
      <S.StoreLogo src={Googlestore} />
      <S.StoreLogo src={Appstore} />
    </S.StoreWrapper>
  );
};

export default Store;
