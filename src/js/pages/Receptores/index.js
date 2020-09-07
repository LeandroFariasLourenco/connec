import React from 'react';

import Container from '@Layouts/Container';
import ListWrapper from '@Layouts/ListWrapper';

import { Receivers } from '@Requests';

const Receptores = () => {
  return (
    <Container>
      <ListWrapper
        title='Receptor'
        data={Receivers}
        redirect='receptores'
        storeValue='receiver'
      />
    </Container>
  );
};

export default Receptores;
