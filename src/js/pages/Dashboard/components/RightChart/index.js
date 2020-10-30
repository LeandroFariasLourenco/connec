import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import graphicData from '@Utils/Hospital/graphicData';

import './style.scss';

import * as S from './styled';

const RightChart = () => {
  const { monthNumber } = useSelector(state => state.dashboard);
  const { isLoading } = useSelector(state => state.dashboard);
  const [dataForChart, setDataForChart] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (!isMounted) {
      graphicData(monthNumber, 2020).then((data) => {
        setDataForChart(data);
      });
    }
  }, []);

  return (
    <S.GraphicWrapper
      className={cx({ 'is--loading': isLoading })}
    >
      <Line
        data={dataForChart}
        width={80}
        height={35}
        options={{ maintainAspectRatio: true }}
      />
    </S.GraphicWrapper>
  );
};

export default RightChart;
