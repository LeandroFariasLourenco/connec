import React from 'react';
import { Line } from 'react-chartjs-2';

import graphicData from '@Utils/hospital/graphicData';

import './style.scss';

import * as S from './styled';

const RightChart = () => {
  return (
    <S.GraphicWrapper>
      <Line
        data={graphicData}
        width={80}
        height={35}
        options={{ maintainAspectRatio: true }}
      />
    </S.GraphicWrapper>
  );
};

export default RightChart;
