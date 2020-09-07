import React from 'react';

import Container from '@Layouts/Container';

import Header from './components/Header';
import List from './components/List';

import * as S from './styled';

const Historico = () => {
  return (
    <Container>
      <S.HistoryWrapper>
        <S.Background />
        <Header />
        <List />
      </S.HistoryWrapper>
    </Container>
  );
};

export default Historico;
