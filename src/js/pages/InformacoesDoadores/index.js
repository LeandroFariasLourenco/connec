import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from '@Utils/Object';

import Container from '@Layouts/Container';

import { getPatient } from '@Requests/Patient';

import Loader from '@Components/Loader';

import InformationWrapper from '@Layouts/InformationWrapper';

import * as S from './styled';

const InformacoesDoadores = ({ match: { params: { id } } }) => {
  const [donor, setDonor] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPatient('doadores', id)
      .then(({ data }) => {
        setDonor(data);
        setLoading(false);
      })
      .catch((e) => {
        console.warn(e);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      {loading && <Loader />}

      <S.Wrapper>
        <S.Return>

        </S.Return>

        <S.Content>
          {!isEmpty(donor) && <InformationWrapper patient={donor}/>}

        </S.Content>
      </S.Wrapper>
    </Container>
  );
};

InformacoesDoadores.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default InformacoesDoadores;
