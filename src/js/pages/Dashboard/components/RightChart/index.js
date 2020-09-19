import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import graphicData from '@Utils/Hospital/graphicData';

import './style.scss';

import * as S from './styled';

const RightChart = () => {
  const { isLoading } = useSelector(state => state.dashboard);

  return (
    <S.GraphicWrapper
      className={cx({ 'is--loading': isLoading })}
    >
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
