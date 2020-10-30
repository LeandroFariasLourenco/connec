import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

import C from '@Constants';

import { openNotification } from '@Store/ducks/general';

import BackgroundImage from '@Images/dashboard/background.png';
import Container from '@Layouts/Container';

import Slipper from './components/Slipper';
import LeftChart from './components/LeftChart';
import RightChart from './components/RightChart';

import { getPatientWaiting } from '@Requests/Patient';

import * as S from './styled';

const Dashboard = () => {
  const { currentPage } = useSelector((state) => state.navbar);
  const [isMounted, setIsMounted] = useState(false);
  const [patients, setPatients] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getPatientWaiting()
      .then((response) => {
        setPatients(response.data);
        setIsMounted(true);

        return response;
      }, (err) => {
        setIsMounted(true);
        return err;
      });

    return () => {
      if (!patients.length) return;

      dispatch(openNotification(true));
    };
  }, []);

  useEffect(() => {
    if (!isMounted || !sessionStorage.getItem('connectedToWebsocket')) return;

    const socket = new SockJS('https://connec-api.herokuapp.com/notificacoes/');
    const { sub: hospitalId } = jwtDecode(sessionStorage.getItem(C.ACCESSTOKEN));
    sessionStorage.setItem('connectedToWebsocket', true);

    const stompConnectionCallback = function (frame) {
      stompClient.subscribe(`/topic/matches/${hospitalId}`, (match) => {
        dispatch(openNotification(true));
      });
    };

    const stompClient = Stomp.over(socket);
    stompClient.connect({}, stompConnectionCallback);
  }, [isMounted, currentPage]);

  return (
    <Container
      alignRight
      backgrounAlignRight={BackgroundImage}
    >
      <S.InformationWrapper>
        <S.Title>
          Dashboard
        </S.Title>
        <Slipper />
        <S.ChartsWrapper>
          <LeftChart />
          <RightChart />
        </S.ChartsWrapper>
      </S.InformationWrapper>
    </Container>
  );
};

export default Dashboard;
