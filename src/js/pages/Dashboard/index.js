import React from 'react';

import BackgroundImage from '@Images/dashboard/background.png';
import Container from '@Components/Container';

import Slipper from './components/Slipper';
import LeftChart from './components/LeftChart';
import RightChart from './components/RightChart';

import * as S from './styled';

const Dashboard = () => {
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
