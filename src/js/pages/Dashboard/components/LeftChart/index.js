import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import * as S from './styled';

const data = {
  labels: [
    'Em Espera',
    'Doadores',
    'Receptores'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

const LeftChart = () => {
  return (
    <S.ChartWrapper>
      <Doughnut
        data={data}
        width={70}
        height={50}
        options={{ maintainAspectRatio: true }}
      />
    </S.ChartWrapper>
  );
};

export default LeftChart;
