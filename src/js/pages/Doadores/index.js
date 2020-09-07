import React from 'react';

import Container from '@Layouts/Container';
import ListWrapper from '@Layouts/ListWrapper';

import { Donors } from '@Requests';

const Doadores = () => {
  return (
    <Container>
      <ListWrapper
        title='Doador'
        data={Donors}
        redirect='doadores'
        storeValue='donors'
      />
    </Container>
  );
};

export default Doadores;
