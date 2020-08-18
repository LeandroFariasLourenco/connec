import React from 'react';

import Container from '@Components/Container';

import ReceiverList from './components/ReceiverList';
import ReceiverHeader from './components/ReceiverHeader';
import Registers from './components/Registers';

import * as S from './styled';

const Receptores = () => {
  return (
    <Container>
      <S.ReceiverWrapper>
        <ReceiverHeader />
        <S.FrameWrapper>
          <ReceiverList />
          <Registers />
        </S.FrameWrapper>
      </S.ReceiverWrapper>
    </Container>
  );
};

export default Receptores;
