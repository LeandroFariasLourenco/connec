import React from 'react';
import PropTypes from 'prop-types';

import Container from '@Layouts/Container';
import FormUpdateWrapper from '@Layouts/FormUpdateWrapper';

import stepOptions from '@Resources/UpdateSteps';

import * as S from './styled';

const AtualizarDoadores = ({ match: { params: { id } } }) => {
  return (
    <Container
      backgrounAlignRight
    >
      <S.RegisterFormWrapper>
        <FormUpdateWrapper
          stepTitle='Atualização de Doador'
          stepOptions={stepOptions}
          formType='doador'
          noBackground
          stepFirst
          patientId={id}
        />
      </S.RegisterFormWrapper>
    </Container>
  );
};

AtualizarDoadores.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default AtualizarDoadores;
