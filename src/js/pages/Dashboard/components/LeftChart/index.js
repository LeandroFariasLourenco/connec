import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import cx from 'classnames';

import DoughnutData, { legends } from '@Utils/Hospital/doughnutData';

import './style.scss';

import * as S from './styled';

const LeftChart = () => {
  const { currentMonth } = useSelector(state => state.dashboard);
  const { isLoading } = useSelector(state => state.dashboard);

  return (
    <S.ChartWrapper
      className={cx({ 'is--loading': isLoading })}
    >
      <S.InformationText>
        <S.InformationTitle>{currentMonth}</S.InformationTitle>

        <S.Information>
          Dê uma olhada no desempenho do hospital
          <i>Teste</i>
          durante o respectivo período e veja como estão andando a performance e
          eficiência das transações:
        </S.Information>
      </S.InformationText>
      <Pie
        data={DoughnutData}
        width={window.innerWidth >= 1500 ? 60 : 40}
        height={50}
        legend={legends}
        options={{ maintainAspectRatio: true }}
      />
    </S.ChartWrapper>
  );
};

export default LeftChart;
