import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';

import C from '@Constants';

import { setDonors } from '@Store/ducks/donors';

import Container from '@Layouts/Container';
import ListWrapper from '@Layouts/ListWrapper';
import NotFound from '@Layouts/NotFound';

import { getDonors } from '@Requests/Donors';

const Doadores = () => {
  const dispatch = useDispatch();
  const [donorsList, setDonorsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDonors()
      .then(({ data }) => {
        setDonorsList(data);

        dispatch(setDonors({
          count: data.length,
          monthsCount: data.length
        }));
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.error(e);
      });
  }, []);

  if (loading) return <Container className={cx({ 'no--donors': !donorsList.length })}/>;

  return (
    <Container
      className={cx({ 'no--donors': !donorsList.length })}
    >
      {!donorsList.length &&
        <NotFound
          type='Doador'
          message='Parece que seu hospital ainda não possui nenhum doador cadastrado no sistema.'
          heading='Que tal tentar cadastrar um agora?'
          redirect={C.PATHS.DOADORES_CADASTRO}
        />
      }

      {!!donorsList.length && (
        <ListWrapper
          title='Doador'
          data={donorsList}
          redirect='doadores'
          storeValue='donors'
        />
      )}
    </Container>
  );
};

export default Doadores;
