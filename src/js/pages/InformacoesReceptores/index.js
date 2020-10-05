import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from '@Utils/Object';

import Container from '@Layouts/Container';

import { getPatient } from '@Requests/Patient';

import Loader from '@Components/Loader';

import InformationWrapper from '@Layouts/InformationWrapper';

import * as S from './styled';

const InformacoesReceptores = ({ match: { params: { id } } }) => {
  const [receiver, setReceiver] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPatient('receptores', id)
      .then(({ data }) => {
        setReceiver(data);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <Container>
      {loading && <Loader />}

      <S.Wrapper>
        <S.Return>

        </S.Return>

        <S.Content>
          {!isEmpty(receiver) && <InformationWrapper patient={receiver} />}
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
