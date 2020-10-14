import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getBloodType, getOrgan } from '@Utils/PatientInfo';

import PatientBlocks from '@Resources/Patient/Details';

import * as S from './styled';

const Information = ({
  patient
}) => (
  <S.Wrapper>
    {PatientBlocks.map(({
      id,
      icon,
      title
    }) => (
      <S.InfoBlock key={id} className={cx({ 'has--organ': !icon })}>
        {icon ? <img src={icon} /> : getOrgan(patient[title])}
        <S.Content>
          {getBloodType(patient[title])
            ? getBloodType(patient[title])
            : patient[title]}
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
    orgao: PropTypes.string.isRequired,
    rg: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    sobrenome: PropTypes.string.isRequired,
    tipoSanguineo: PropTypes.string.isRequired,
    foto: PropTypes.string,
    endereco: PropTypes.object,
    telefone: PropTypes.string,
    celular: PropTypes.string
  }).isRequired
};

export default Information;
