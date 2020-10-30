import React, { useState, useEffect } from 'react';

import Container from '@Layouts/Container';

import Header from './components/Header';
import List from './components/List';

import { getMatches } from '@Requests/History';

import * as S from './styled';

const Historico = () => {
  const [loading, setLoading] = useState(true);
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    getMatches()
      .then((response) => {
        setHistoryList(response.data);
        setLoading(false);
        return response;
      })
      .catch((err) => {
        console.warn(err);
        setLoading(false);
        return err;
      });
  }, []);

  return (
    <Container>
      <S.HistoryWrapper>
        <S.Background />
        <Header
          transactionCount={historyList.length}
        />
        <List
          loading={loading}
          historyList={historyList}
        />
      </S.HistoryWrapper>
    </Container>
  );
};

export default Historico;
