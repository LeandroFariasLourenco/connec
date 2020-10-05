import React from 'react';
import PropTypes from 'prop-types';

import Placeholder from '@Images/lazyload/placeholder.jpg';
import EditIcon from '@Icons/general/edit.svg';
import PhoneIcon from '@Icons/general/phone.svg';

import Button from '@Components/Button';

import * as S from './styled';

const Header = ({
  patient
}) => {
  return (
    <S.Heading>
      <S.UserImage>
        <img src={patient.foto || Placeholder} />
      </S.UserImage>
      {console.log(patient)}

      <S.UserInfo>
        <S.UserTitle>{`${patient.nome} ${patient.sobrenome}`}</S.UserTitle>

        <S.UserBirthDate>
          Data de nascimento:
          {new Date(patient.dataNascimento).toLocaleDateString('pt-BR')}
        </S.UserBirthDate>

        <S.UserRegister>
          Cpf: {patient.cpf}
        </S.UserRegister>

        <S.UserAddress>
          {patient.endereco.logradouro}, {patient.endereco.numero} - {patient.endereco.uf}
        </S.UserAddress>

        <S.UserContact>
          <Button
            reset
            title='Contato'
            onClick={() => window.open(`https://api.whatsapp.com/send?phone=${patient.celular}`)}
          >
            <img src={PhoneIcon} alt='Contato' title='Contato' />
          </Button>

          <Button
            reset
            title='Contato'
          >
            <img src={EditIcon} alt='Contato' title='Contato' />
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
