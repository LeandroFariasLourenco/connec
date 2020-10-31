import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import ListOptions from '@Resources/HistoryList';

import { openNotification } from '@Store/ducks/general';

import { ReactComponent as PlaneIcon } from '@Icons/history/plane.svg';
import { ReactComponent as AmbulanceIcon } from '@Icons/history/ambulance.svg';

import Loader from '@Components/Loader';

import * as S from './styled';

const List = ({
  loading,
  historyList
}) => {
  const { notificationOpen: isOpen } = useSelector(state => state.general);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openNotification(!isOpen));
  };
  return (
    <S.ListWrapper>
      {loading && <Loader />}

      <S.Table
        cellSpacing={0}
        cellPadding={0}
      >
        <S.THead>
          <S.Row>
            {ListOptions.map(({ title, id }) => (
              <S.Head
                key={id}
              >
                {title}
              </S.Head>
            ))}
          </S.Row>
        </S.THead>

        <S.Body>
          {historyList.map((patient, i) => (
            <S.Row
              className='has--data'
              key={i}
            >
              <S.Data>{new Date(patient.data).toLocaleDateString('pt-BR')}</S.Data>
              <S.Data
                className='is--icon'
              >{
                  {
                    AEREO: <PlaneIcon />,
                    TERRESTRE: <AmbulanceIcon />
                  }[patient.transporteIdeal]
                }</S.Data>
              <S.Data>{patient.orgaoDoador.hospital.nome}</S.Data>
              <S.Data>{patient.orgaoReceptor.hospital.nome}</S.Data>
              <S.Data>
                <span
                  className={cx({
                    'is--aproved': patient.status === 'CONFIRMADO',
                    'is--denied': patient.status === 'REJEITADO',
                    'is--pendent': patient.status === 'AGUARDANDO'
                  })}
                >
                  {patient.status !== 'AGUARDANDO' && (patient.status)}
                  {patient.status === 'AGUARDANDO' && (
                    <S.OpenPopup
                      reset
                      title='Aceitar'
                      onClick={() => handleClick()}
                    >
                      Pendente
                    </S.OpenPopup>
                  )}
                </span>
              </S.Data>
            </S.Row>
          ))}
        </S.Body>
      </S.Table>
    </S.ListWrapper>
  );
};

List.propTypes = {
  loading: PropTypes.bool.isRequired,
  historyList: PropTypes.array.isRequired
};

export default List;
