import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import cx from 'classnames';

import DoughnutData, { legends } from '@Utils/Hospital/doughnutData';

import './style.scss';

import * as S from './styled';

const LeftChart = () => {
  const { currentMonth, monthNumber } = useSelector(state => state.dashboard);
  const { isLoading } = useSelector(state => state.dashboard);

  return (
    <S.ChartWrapper
      className={cx({ 'is--loading': isLoading })}
    >
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
