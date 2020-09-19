import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setReceiverInfo } from '@Store/ducks/receiver';

import Container from '@Layouts/Container';
import ListWrapper from '@Layouts/ListWrapper';

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
