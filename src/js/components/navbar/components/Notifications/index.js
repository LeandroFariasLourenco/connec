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
        if (!response.data.length) {
          dispatch(openNotification(false));
          dispatch(setHasNotification(false));
          return;
        }

        setPatients(response.data);
        dispatch(openNotification(true));
        dispatch(setHasNotification(true));
        return response;
      }, (err) => {
        return err;
      });
  }, [isOpen, hasNotification]);

  useEffect(() => {
    if (!patients.length) {
      dispatch(openNotification(false));
      dispatch(setHasNotification(false));
    }
  }, [patients]);

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
        const filteredPatient = patients.filter((patientState) => patientState.codigoRastreio !== response.data.codigoRastreio);

        setPatients(filteredPatient);
        return response;
      }, (err) => {
        alert('Ocorreu um erro, tente novamente :(');
        return err;
      });
  };

  return (
    <Popup
      open={isOpen}
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
