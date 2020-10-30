import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';

import { openNotification, setHasNotification } from '@Store/ducks/general';

import { ReactComponent as PlaneIcon } from '@Icons/history/plane-white.svg';
import { ReactComponent as AmbulanceIcon } from '@Icons/history/ambulance-white.svg';

import { getPatientWaiting, updatePatientDonating } from '@Requests/Patient';

import UserNotificationInfo from './../UserNotificationInfo';

import * as S from './styled';

import 'reactjs-popup/dist/index.css';

const Notifications = () => {
  const { notificationOpen: isOpen, hasNotification } = useSelector(state => state.general);
  const [patients, setPatients] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getPatientWaiting()
      .then((response) => {
        setPatients(response.data);

        return response;
      }, (err) => {
        return err;
      });

    return () => {
      if (!patients.length) return;

      dispatch(openNotification(true));
      dispatch(setHasNotification(true));
    };
  }, [isOpen, hasNotification]);

  const handleSubmitResponse = (patient, newStatus) => {
    const {
      status,
      codigoRastreio,
      transporteIdeal,
      data,
      ...patientToSend
    } = { ...patient };
    patientToSend.statusMatch = newStatus;

    updatePatientDonating(patientToSend)
      .then((response) => {
        alert('Paciente atualizado com sucesso');
        return response;
      }, (err) => {
        alert('Ocorreu um erro, tente novamente :(');
        return err;
      });

    dispatch(setHasNotification(false));
  };

  return (
    <Popup
      open={isOpen}
      closeOnDocumentClick={false}
      closeOnEscape={false}
    >
      <S.PopupWrapper>
        {patients.map((patient, i) => (
          <S.Content
            key={i}
          >
            <UserNotificationInfo
              organName={patient.orgaoDoador.nome}
              userType='doador'
              userId={patient.orgaoDoador.codigoPaciente}
            />
            <S.Middle>
              <S.TrackerCode>
                {
                  {
                    AEREO: <PlaneIcon />,
                    TERRESTRE: <AmbulanceIcon />
                  }[patient.transporteIdeal]
                }
                Código de rastreio
                <br />
                {patient.codigoRastreio}
              </S.TrackerCode>
              <S.DateSpan>
                Data da ocorrência: {new Date(patient.data).toLocaleDateString('pt-BR')}
              </S.DateSpan>

              <S.OptionsToChoose>
                <S.Reject
                  title='Rejeitar'
                  onClick={() => handleSubmitResponse(patient, 'REJEITADO')}
                >
                  Rejeitar
                </S.Reject>
                <S.Accept
                  title='Aceitar'
                  onClick={() => handleSubmitResponse(patient, 'CONFIRMADO')}
                >
                  Aceitar
                </S.Accept>
              </S.OptionsToChoose>
            </S.Middle>
            <UserNotificationInfo
              organName={patient.orgaoReceptor.nome}
              userType='receptor'
              userId={patient.orgaoReceptor.codigoPaciente}
            />
          </S.Content>
        ))}
      </S.PopupWrapper>
    </Popup>
  );
};

export default Notifications;
