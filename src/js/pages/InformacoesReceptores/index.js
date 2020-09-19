import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Container from '@Layouts/Container';

import { getReceivers } from '@Requests/Receivers';

// import * as S from './styled';

const InformacoesReceptores = ({ match: { params: { id } } }) => {
  const [receiver, setReceiver] = useState({});

  useEffect(() => {
    getReceivers(id)
      .then(({ data }) => {
        setReceiver(data);
      })
      .catch(console.log);
  }, []);

  return (
    <Container>
      {console.log(receiver)}
    </Container>
  );
};
InformacoesReceptores.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default InformacoesReceptores;
