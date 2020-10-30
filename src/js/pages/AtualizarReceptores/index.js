import React from 'react';
import PropTypes from 'prop-types';

import Container from '@Layouts/Container';
import FormUpdateWrapper from '@Layouts/FormUpdateWrapper';

import stepOptions from '@Resources/UpdateSteps';

import * as S from './styled';

const AtualizarReceptores = ({ match: { params: { id } } }) => {
  return (
    <Container
      backgrounAlignRight
    >
      <S.RegisterFormWrapper>
        <FormUpdateWrapper
          stepTitle='Atualização de Receptores'
          stepOptions={stepOptions}
          formType='receptor'
          noBackground
          stepFirst
          patientId={id}
        />
      </S.RegisterFormWrapper>
    </Container>
  );
};

AtualizarReceptores.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default AtualizarReceptores;
