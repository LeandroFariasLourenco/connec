import React from 'react';
import PropTypes from 'prop-types';

import Placeholder from '@Images/lazyload/placeholder.jpg';
import EditIcon from '@Icons/general/edit.svg';
import PhoneIcon from '@Icons/general/phone.svg';
import ProgressIcon from '@Icons/general/progress-bar.svg';

import Button from '@Components/Button';

import * as S from './styled';

const Header = ({
  patient
}) => {
  return (
    <S.Heading>
      <S.ImageWrapper>
        <S.UserImage src={patient.foto || Placeholder} />
        <S.Progress src={ProgressIcon} />
      </S.ImageWrapper>
      {console.log(patient)}

      <S.UserInfo>
        <S.UserTitle>{`${patient.nome} ${patient.sobrenome}`}</S.UserTitle>

        <S.UserBasicInfo>
          <strong>Data de nascimento</strong>:
          {new Date(patient.dataNascimento).toLocaleDateString('pt-BR')}
        </S.UserBasicInfo>

        <S.UserBasicInfo>
          <strong>Cpf</strong>: {patient.cpf}
          <br />
          <strong>RG</strong>: {patient.rg}
        </S.UserBasicInfo>

        <S.UserBasicInfo>
          <strong>Endereço</strong>: {patient.endereco.logradouro}, {patient.endereco.numero} - {patient.endereco.uf}
        </S.UserBasicInfo>

        <S.UserBasicInfo>
          <strong>Telefone</strong>: {patient.telefone || 'Não registrado'}
          <br />
          <strong>Celular</strong>: {patient.celular || 'Não registrado'}
        </S.UserBasicInfo>

        <S.UserContact>
          <Button
            reset
            title='Contato'
            onClick={() => window.open(`https://api.whatsapp.com/send?phone=${encodeURIComponent(patient.celular)}`)}
          >
            <img src={PhoneIcon} alt='Contato' title='Contato' />
          </Button>

          <Button
            reset
            title='Contato'
          >
            <img src={EditIcon} alt='Editar' title='Editar' />
          </Button>
        </S.UserContact>
      </S.UserInfo>
    </S.Heading>
  );
};

Header.propTypes = {
  patient: PropTypes.shape({
    cpf: PropTypes.string.isRequired,
    dataNascimento: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    orgao: PropTypes.string.isRequired,
    rg: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    sobrenome: PropTypes.string.isRequired,
    tipoSanguineo: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
    endereco: PropTypes.object,
    telefone: PropTypes.string,
    celular: PropTypes.string
  }).isRequired
};

export default Header;
