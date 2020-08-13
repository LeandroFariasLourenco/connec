import React from 'react';

import Container from '@Components/Container';

import ReceiverList from './components/ReceiverList';
import ReceiverHeader from './components/ReceiverHeader';

import * as S from './styled';

const Receptores = () => {
  return (
    <Container>
      <S.ReceiverWrapper>
        <ReceiverHeader />
        <ReceiverList />
      </S.ReceiverWrapper>
    </Container>
  );
};

export default Receptores;
