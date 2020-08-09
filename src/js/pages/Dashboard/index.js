import React from 'react';

import Container from '@Components/Container';

import Slipper from './components/Slipper';
import LeftChart from './components/LeftChart';

import * as S from './styled';

const Dashboard = () => {
  return (
    <Container
      alignRight
    >
      <S.InformationWrapper>
        <S.Title>
          Dashboard
        </S.Title>
        <Slipper />
        <LeftChart />
      </S.InformationWrapper>
      <S.Background />
    </Container>
  );
};

export default Dashboard;
