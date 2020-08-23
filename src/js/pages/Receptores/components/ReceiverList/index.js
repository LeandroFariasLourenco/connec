import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';

const ReceiverList = () => {
  const { receptorCount } = useSelector(state => state.receiver);

  return (
    <S.HeadingWrapper>
      <S.ListTitle>
        Receptores
      </S.ListTitle>
      <S.ReceiverCount>
        <span>
          {receptorCount}
        </span>
        Receptores
      </S.ReceiverCount>
    </S.HeadingWrapper>
  );
};

export default ReceiverList;
