import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import DoughnutData, { legends } from '@Utils/hospital/doughnutData';

import './style.scss';

import * as S from './styled';

const LeftChart = () => {
  const { currentMonth, monthNumber } = useSelector(state => state.dashboard);

  return (
    <S.ChartWrapper>
      <h1>{currentMonth} {monthNumber}</h1>
      <Pie
        data={DoughnutData}
        width={40}
        height={50}
        legend={legends}
        options={{ maintainAspectRatio: true }}
      />
    </S.ChartWrapper>
  );
};

export default LeftChart;
