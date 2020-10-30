import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import cx from 'classnames';

import doughnutData, { legends } from '@Utils/Hospital/doughnutData';

import { getAnalytic } from '@Requests/Analytic';

import './style.scss';

import * as S from './styled';

const LeftChart = () => {
  const { currentMonth, monthNumber } = useSelector(state => state.dashboard);
  const { isLoading } = useSelector(state => state.dashboard);
  const [dataForChart, setDataForChart] = useState({});
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    getAnalytic(monthNumber, 2020)
      .then((response) => {
        setDataForChart(doughnutData(response.data.totalReceptores, response.data.totalDoadores));
        setIsEmpty(response.data.totalDoadores === 0 && response.data.totalReceptores === 0);
      }, (err) => err);
  }, [currentMonth]);

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
      {isEmpty ? (
        <span>
          Ops... Parece que não temos dados para o respectivo mês
        </span>
      ) : (
        <Pie
          data={dataForChart}
          width={window.innerWidth >= 1500 ? 60 : 40}
          height={50}
          legend={legends}
          options={{ maintainAspectRatio: true }}
        />
      )}
    </S.ChartWrapper>
  );
};

export default LeftChart;
