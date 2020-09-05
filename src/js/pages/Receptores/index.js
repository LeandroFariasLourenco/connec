import React from 'react';

import Container from '@Layouts/Container';
import ListWrapper from '@Layouts/ListWrapper';

import ReceiverList from '@Requests';

const Receptores = () => {
  return (
    <Container>
      <ListWrapper
        title='Receptor'
        data={ReceiverList}
        redirect='Receptores'
        storeValue='receiver'
      />
    </Container>
  );
};

export default Receptores;
