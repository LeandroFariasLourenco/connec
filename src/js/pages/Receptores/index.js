import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import C from '@Constants';

import { setReceiverInfo } from '@Store/ducks/receiver';

import Container from '@Layouts/Container';
import ListWrapper from '@Layouts/ListWrapper';
import NotFound from '@Layouts/NotFound';

import { getPatient } from '@Requests/Patient';

import Loader from '@Components/Loader';

const Receptores = () => {
  const dispatch = useDispatch();
  const [receivers, setReceivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPatient('receptores')
      .then(({ data }) => {
        setReceivers(data);

        dispatch(setReceiverInfo({
          receiverCount: data.length,
          lastMonthsCount: data.length
        }));

        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container
        className={cx({ 'no--receivers': !receivers.length })}
      >
        <Loader />
      </Container>
    );
  }

  return (
    <Container className={cx({ 'no--receivers': !receivers.length })}>
      {!receivers.length &&
        <NotFound
          type='Receptor'
          message='Parece que seu hospital ainda não possui nenhum receptor cadastrado no sistema.'
          heading='Que tal tentar cadastrar um agora?'
          redirect={C.PATHS.RECEPTORES_CADASTRO}
        />
      }

      {!!receivers.length && (
        <ListWrapper
          title='Receptor'
          data={receivers}
          redirect='receptores'
          storeValue='receiver'
        />
      )}
    </Container>
  );
};

export default Receptores;
