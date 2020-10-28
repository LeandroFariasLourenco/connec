import React from 'react';
import PropTypes from 'prop-types';

import { getBloodType, getOrgan } from '@Utils/PatientInfo';

import { ReactComponent as BloodTypeIcon } from '@Icons/patient/bloodtype.svg';

import * as S from './styled';

const Information = ({
  patient
}) => (
  <S.Wrapper>
    <S.InfoBlock className='has--organ'>
      <BloodTypeIcon />
      <S.Content>
        {getBloodType(patient.tipoSanguineo)}
      </S.Content>
    </S.InfoBlock>

    {patient.orgaos.map(({ nome, id }, i) => (
      <S.InfoBlock
        key={i}
      >
        {getOrgan(nome)}
        <S.Content
          key={id}
        >
          {nome}
        </S.Content>
      </S.InfoBlock>
    ))}
  </S.Wrapper>
);

Information.propTypes = {
  patient: PropTypes.shape({
    cpf: PropTypes.string.isRequired,
    dataNascimento: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    orgaos: PropTypes.array.isRequired,
    rg: PropTypes.string.isRequired,
    score: PropTypes.number,
    sobrenome: PropTypes.string.isRequired,
    tipoSanguineo: PropTypes.string.isRequired,
    foto: PropTypes.string,
    endereco: PropTypes.object,
    telefone: PropTypes.string,
    celular: PropTypes.string
  }).isRequired
};

export default Information;
