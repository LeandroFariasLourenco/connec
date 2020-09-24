import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from '@Utils/Object';

import Container from '@Layouts/Container';

import { getReceivers } from '@Requests/Receivers';

import Header from './components/Header';

import * as S from './styled';

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
      <S.Wrapper>
        <S.Return>

        </S.Return>

        <S.Content>
          {!isEmpty(receiver) && <Header receiver={receiver}/>}
          {console.log(receiver)}

        </S.Content>
      </S.Wrapper>
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
