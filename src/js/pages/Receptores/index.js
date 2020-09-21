import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import C from '@Constants';

import { setReceiverInfo } from '@Store/ducks/receiver';

import Container from '@Layouts/Container';
import ListWrapper from '@Layouts/ListWrapper';
import NotFound from '@Layouts/NotFound';

import { getReceivers } from '@Requests/Receivers';

const Receptores = () => {
  const dispatch = useDispatch();
  const [receivers, setReceivers] = useState([]);
  useEffect(() => {
    getReceivers()
      .then(({ data }) => {
        setReceivers(data);

        dispatch(setReceiverInfo({
          receiverCount: data.length,
          lastMonthsCount: data.length
        }));
      })
      .catch(console.log);
  }, []);

  return (
    <Container>
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
