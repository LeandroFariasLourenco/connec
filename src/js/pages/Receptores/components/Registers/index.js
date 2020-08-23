import React from 'react';
// import { useSelector } from 'react-redux';

import ReceiverList from '@Requests';

import ArrowSvg from '@Icons/back.svg';

import * as S from './styled';

const Registers = () => {
  // const { receptorCount }

  return (
    <S.ListWrapper>
      {ReceiverList.map(({
        id,
        imageUrl,
        name,
        registerDate,
        score
      }) => (
        <S.Receiver
          key={id}
        >
          <S.ReceiverThumb
            src={imageUrl}
          />
          <S.ReceiverName>
            {name}
          </S.ReceiverName>
          <S.ReceiverRegisterDate>
            {registerDate}
          </S.ReceiverRegisterDate>
          <S.ReceiverCount>
            {score}
          </S.ReceiverCount>
          <S.ReceiverDetails
            reset
            title='Ver mais'
            handler={() => {}}
          >
            <img src={ArrowSvg} />
          </S.ReceiverDetails>
        </S.Receiver>
      ))}
    </S.ListWrapper>
  );
};

export default Registers;
