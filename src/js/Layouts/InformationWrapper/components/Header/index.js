import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Placeholder from '@Images/lazyload/placeholder.jpg';
import EditIcon from '@Icons/general/edit.svg';
import PhoneIcon from '@Icons/general/phone.svg';
import { ReactComponent as ProgressIcon } from '@Icons/general/progress-bar.svg';

import { setStorage } from '@Utils/General';

import Button from '@Components/Button';

import * as S from './styled';

const Header = ({
  patient,
  patientId
}) => {
  const history = useHistory();

  useEffect(() => {
    const progress = document.querySelector('circle');
    const radius = progress.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    progress.style.strokeDasharray = `${circumference} ${circumference}`;
    progress.style.strokeDashoffset = circumference - patient.score / 100 * circumference;
  }, []);

  const handleEdit = () => {
    if (patient.score) {
      setStorage('receptorupdate', { ...patient });
      history.push(`/receptores/atualizar/${patientId}`);
      return;
    }

    setStorage('doadorupdate', { ...patient });
    history.push(`/doadores/atualizar/${patientId}`);
  };

  return (
    <S.Heading>
      <S.ImageWrapper>
        <S.UserImage src={patient.foto || Placeholder} />
        <ProgressIcon />

        {!!patient.score && (
          <S.Score>
            <span className='number'>{patient.score}</span>
            <span className='text'>score</span>
          </S.Score>
        )}
      </S.ImageWrapper>

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
            onClick={() => handleEdit()}
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
    orgaos: PropTypes.array.isRequired,
    rg: PropTypes.string.isRequired,
    score: PropTypes.number,
    sobrenome: PropTypes.string.isRequired,
    tipoSanguineo: PropTypes.string.isRequired,
    foto: PropTypes.string,
    endereco: PropTypes.object,
    telefone: PropTypes.string,
    celular: PropTypes.string
  }).isRequired,
  patientId: PropTypes.string.isRequired
};

export default Header;
